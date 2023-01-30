
function getParameterByName(name)
{
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}
function addCommas(nStr)
{
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1))
    {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
function Search()
{
    var keyword = $("#searchbox").val();
    if (typeof keyword == "undefined" || keyword == "Search")
        keyword = "";
    window.location = "/Catalog.aspx?m=TopFavorites&c=9&t=AllTime&d=All&q=" + keyword;
    return false;
}
function UpdatePageAndShow()
{
    GamesDisplay.SetCurrentPageNum(1);
    if (BCOnlyGamesDisplay != null)
    {
        BCOnlyGamesDisplay.SetCurrentPageNum(1);
    }
    GamesDisplay.UpdateAddress();
    GamesDisplay.ShowGames();
    if (BCOnlyGamesDisplay != null)
    {
        BCOnlyGamesDisplay.ShowGames();
    }
}
function GamesPageInit()
{
    // These HAVE TO BE FIRST
    $.address.crawlable(true)
    $.address.autoUpdate(false);

    $.address.change(function(event)
    {
    });

    SetupDisplay(GamesDisplay, "#GamesContent", defaultParamData, defaultSeedData, pageSize);
    if (BCOnlyGamesDisplay != null)
    {
        SetupDisplay(BCOnlyGamesDisplay, "#BCOnlyGamesContent", defaultBCOnlyParamData, defaultBCOnlySeedData, BCOnlyPageSize);
    }
    
    $("#searchbox").focus(function()
    {
        $(this).css("color", "#000");
        if (this.value == "Search")
        {
            this.value = "";
        }
        else
        {
            this.select();
        }
    });
    $("#searchbox").blur(function()
    {
        if ($.trim(this.value) == "")
        {
            $(this).css("color", "#888");
            this.value = "Search";
        }
    });

    // Bind all of the play/build tabs
    $('.GamesSort').click(function()
    {
        // Get the sort
        var sortType = $(this).attr("sort");
        CreateGamesDisplay.prototype.SetSortType(sortType);
        UpdatePageAndShow();
        return false;
    });

    // Bind the filter links
    $('.GamesFilter').click(function()
    {
        if ($(this).attr('disabled') == 'disabled')
            return false;
        // Change the page
        var filterType = $(this).attr('filter');
        CreateGamesDisplay.prototype.SetFilterType(filterType);
        UpdatePageAndShow();
        return false;
    });

    // Bind the genre links
    $('.GamesGenre').click(function() {
        if ($(this).attr('disabled') == 'disabled')
            return false;
        // Change the page
        var genreType = $(this).attr('genre');
        CreateGamesDisplay.prototype.SetGenreType(genreType);
        UpdatePageAndShow();
        return false;
    });

    $('#BCOnlyGamesContentPrevNavButton').click(function()
    {
        BCOnlyGamesDisplay.ChangePage('Prev');
    });
    $('#BCOnlyGamesContentNextNavButton').click(function()
    {
        BCOnlyGamesDisplay.ChangePage('Next');
    });
    $('#GamesContentPrevNavButton').click(function()
    {
        GamesDisplay.ChangePage('Prev');
        GamesDisplay.UpdateAddress();
    });
    $('#GamesContentNextNavButton').click(function()
    {
        GamesDisplay.ChangePage('Next');
        GamesDisplay.UpdateAddress();
    });

    // Init and change handlers
    $.address.externalChange(function(event)
    {
        GamesDisplay.LoadFromUrl();
    });


    AdRefresher.RegisterAd("AdvertisingLeaderboard");
    AdRefresher.RegisterAd("GamePageAdDiv");
}

/* 
Defined after function, but here for visibility:
CreateGamesDisplay.prototype._gamesType = 'Play';   // Possibles: Play, Build
CreateGamesDisplay.prototype._sortType = { 'Play': 'MostPopular', 'Build': 'MostPopular' }; // Associative array for currently selected tabs
CreateGamesDisplay.prototype._filterType = 'Now';   // Possibles: Now, PastDay, PastWeek, AllTime
CreateGamesDisplay.prototype._genreType = 'all';    // Possibles: All, TownandCity, Fantasy, etc...
*/

function CreateGamesDisplay()
{
    // These never get changed
    var _pageSize = 20;
    var _renderTo;
    var _isPageLoad = true;
    var _minBCLevel = 'None';   // Possibles: None, BC, TBC, OBC
   
    // These record the active state
    var _totalNumPages = []; // Associate array per tab type. Key is the following: gametypesortfiltergenre, generated from CreateGamesDisplay.prototype._GenerateComboKey
    var _currentPageNums = [];   // Associate array per tab type. Key is the following: gametypesortfiltergenre, generated from CreateGamesDisplay.prototype._GenerateComboKey
    var _currentCompleteKey = ""; // Used to avoid concurrency if they change pages before response has returned
    var _data = new Array(); // Games data storage for caching...  Key is the following: gametypesortfiltergenre, generated from CreateGamesDisplay.prototype._GenerateComboKey

    function _GenerateGameObject(game)
    {
        var p = CreateGamesDisplay.prototype;
        var template = $('#PlaceTemplate').clone();

        /*if (p._sortType[p._gamesType] != 'RecentlyUpdated')
            template.find('.StatsUpdated').remove();
        if (p._sortType[p._gamesType] != 'TopFavorites')
            template.find('.StatsFavorited').remove();
        if (p._sortType[p._gamesType] != 'MostPopular')
            template.find('.StatsPlayed').remove();*/

        var html = template.html();
        var thumbnailHtml = "<a href='" + game.NavigateUrl + "' style='text-decoration: none'><img src='" + game.ThumbnailUrl + "'/></a>";
        html = html.replace("THUMBNAIL", thumbnailHtml);
        html = html.replace(/GAMENAVIGATEURL/g, game.NavigateUrl);
        var gameName = game.Name;
        gameName = fitStringToWidth(gameName, 160, "GameName"); // Truncate to 160 px with class GameName (bold, 12px)
        
        html = html.replace(/GAMENAME/g, gameName);
        html = html.replace(/CREATORURL/g, game.Creator.Url.replace("~", ""));
        html = html.replace(/CREATORNAME/g, game.Creator.Name);
        if (game.Stats.CurrentPlayersCount == 1)
            html = html.replace(/CURRENTPLAYERSCOUNT/g, game.Stats.CurrentPlayersCount + " player online");
        else
            html = html.replace(/CURRENTPLAYERSCOUNT/g, addCommas(game.Stats.CurrentPlayersCount) + " players online"); 
        
        html = html.replace(/LASTUPDATED/g, game.Stats.LastUpdated);
        html = html.replace(/FAVORITESCOUNT/g, game.Stats.FavoritesCount);
        html = html.replace(/PLAYSCOUNT/g, game.Stats.PlaysCount);
        html = html.replace(/GENREICONALT/g, game.GenreIcon.Alt);
        html = html.replace(/GEARICONALT/g, game.GearIcon.Alt);
        var htmlObject = $(html);
        if (game.Stats.CurrentPlayersCount <= 0)
        {
            var playerCount = htmlObject.find('.PlayerCount');
            playerCount.hide();
            playerCount.attr('noplayers','true');
        }
        htmlObject.find('.GenreIcon').attr('src', game.GenreIcon.Url.replace("~", ""));
        htmlObject.find('.GearIcon').attr('src', game.GearIcon.Url.replace("~", ""));

        if (game.BCOverlay.Url != null) {
            htmlObject.find('.AlwaysShown').append('<img class="BCOverlay" src="' + game.BCOverlay.Url + '" alt="' + game.BCOverlay.Alt + '" />');
        }
        
        htmlObject.attr('title', game.Name);
        
        // Bind hover controls
        htmlObject.find('.AlwaysShown').hover(
            function() {
                $(this).children('.CreatorName').show();
                var playerCount = $(this).children('.PlayerCount');
                if (playerCount.attr('noplayers') === 'true')
                    playerCount.show();
                $(this).siblings('.HoverShown').show();
            },
            function() {
                $(this).children('.CreatorName').hide();
                
                var playerCount = $(this).children('.PlayerCount');
                if (playerCount.attr('noplayers') === 'true')
                    playerCount.hide();
                $(this).siblings('.HoverShown').hide();
            }
        );
        return htmlObject;
    }
    
    // Refers to everything INCLUDING page number
    function _GenerateCurrentCompleteKey()
    {
        var p = CreateGamesDisplay.prototype;
        var currComboKey = p._GenerateCurrentComboKey();
        var pageNum = _GetCurrentPageNum();
        return _GenerateCompleteKey(p._gamesType, p._sortType[p._gamesType], p._filterType, p._genreType, pageNum);
    }
    function _GenerateCompleteKey(gamesType, sortType, filterType, genreType, pageNum)
    {
        return gamesType + sortType + filterType + genreType + pageNum;
    }
    function _GetPageNum(pageNumKey)
    {
        
        // If the page num value is not yet set, set it to 1
        if (typeof _currentPageNums[pageNumKey] == 'undefined') {
            _currentPageNums[pageNumKey] = 1;
            return 1;
        }
        else {
            return _currentPageNums[pageNumKey];
        }
    }
    function _GetCurrentPageNum() 
    {
        
        var pageNumKey = CreateGamesDisplay.prototype._GenerateCurrentComboKey();

        // If the page num value is not yet set, set it to 1
        if (typeof _currentPageNums[pageNumKey] == 'undefined') {
            _currentPageNums[pageNumKey] = 1;
            return 1;
        }
        else {
            return _currentPageNums[pageNumKey];
        }
    }
    function _GetTotalPages(pageNumKey)
    {
        // If the page num value is not yet set, set it to 1
        if (typeof _totalNumPages[pageNumKey] == 'undefined')
        {
            _totalNumPages[pageNumKey] = 1;
            return 1;
        }
        else
        {
            return _totalNumPages[pageNumKey];
        }
    }
    function _SetTotalPages(key, totalPages)
    {
        
        _totalNumPages[key] = totalPages;
    }
    function _ShowLoadingSpinner() 
    {
        // Give them a loading spinner
        $('body').addClass('WaitCursor');

        // Change the next button?
    }
    function _HideLoadingSpinner() 
    {
        // Revert the loading spinner
        $('body').removeClass('WaitCursor');
    }

    // Takes JSON Data and stores it in a JS array of the actual HTML
    // Example: Play, Popular, Now, All page 5 of data would generate a key for Play,
    // Popular, Now, and All, and put the data in the (5-1)*20 = 80 through 99th slots of that array 
    function _StoreJSONData(gamesType, sortType, filterType, genreType, pageNum, data)
    {
        var completeKey = _GenerateCompleteKey(gamesType, sortType, filterType, genreType, pageNum);
        var comboKey = CreateGamesDisplay.prototype._GenerateComboKey(gamesType, sortType, filterType, genreType);
        _SetTotalPages(comboKey, parseInt(data.TotalPages));

//        if (typeof _data[completeKey] == 'undefined')
//            _data[completeKey] = new Array();

        _data[completeKey] = data.Items;
    }
    function _ResultsAreInDataStore(dataAccessKey) 
    {
        return typeof _data[dataAccessKey] != 'undefined' && _data[dataAccessKey].length > 0; // Just make sure there's at least 1 on page in the data store
    }
    function _GetResultsFromDataStore(dataAccessKey) 
    {
        return _data[dataAccessKey];
    }

    function _RenderCurrentView()
    {
        var html = $(document.createElement('div'));

        var comboKey = CreateGamesDisplay.prototype._GenerateCurrentComboKey();
        var currPageNum = _GetCurrentPageNum();

        var pageNumCounter = $(_renderTo + 'TotalPageNums');
        if (pageNumCounter != null)
            $(pageNumCounter).html(_GetTotalPages(comboKey)); // bind our total page count

        // Disable / Enabled paging arrows
        _UpdatePagingControls();

        var dataAccessKey = _GenerateCurrentCompleteKey();
        
        if (_ResultsAreInDataStore(dataAccessKey))
        {
            var data = _GetResultsFromDataStore(dataAccessKey);
            for (var i = 0; i < data.length; i++) // should always be 20, but possibly less with paging / data corruption
            {
                html.append(_GenerateGameObject(data[i]));
            }
        }
        _HideLoadingSpinner();
        $(_renderTo).html(html);
    }
    function _UpdatePagingControls()
    {
        // Change the text
        var pageKey = CreateGamesDisplay.prototype._GenerateCurrentComboKey();
        var pageNum = _GetCurrentPageNum();
        $(_renderTo + 'CurrPageNum').html(pageNum);

        if (_GetTotalPages(pageKey) <= pageNum)
            $(_renderTo + 'NextNavButton').css('visibility', 'hidden');
        else
            $(_renderTo + 'NextNavButton').css('visibility', 'visible');

        if (pageNum == 1)
            $(_renderTo + 'PrevNavButton').css('visibility', 'hidden');
        else
            $(_renderTo + 'PrevNavButton').css('visibility', 'visible');
    }
    /** Public **/
    this.SetCurrentPageNum = function(pageNum)
    {
        var pageKey = CreateGamesDisplay.prototype._GenerateCurrentComboKey();
        _currentPageNums[pageKey] = pageNum;

        _UpdatePagingControls();
    }
    this.UpdateAddress = function()
    {
        var p = CreateGamesDisplay.prototype;

        // Set our current URL params
        $.address.path(p._genreType + "-games");
        var currSort = p._GetCurrentSortType();
        if (currSort == 'Popular' || currSort == 'MostPopular') // Backwards compatible with MostPopular
            $.address.parameter('m', '');
        else
            $.address.parameter('m', currSort);
        $.address.parameter('t', p._filterType);
        var currPageNum = _GetCurrentPageNum();
        if (currPageNum == 1)
            $.address.parameter('p', '');
        else
            $.address.parameter('p', currPageNum);

        $.address.update();
    }
    this.ShowGames = function()
    {
        var p = CreateGamesDisplay.prototype;
        // Values could have changed in the above method call
        var gamesType = p._gamesType;
        var pageNum = _GetCurrentPageNum();
        var filterType = p._filterType;
        var genreType = p._genreType;
        var sortType = p._GetCurrentSortType();

        // Set our new key/hash of the current state
        _currentCompleteKey = _GenerateCurrentCompleteKey(); // Used to detect if user has left complete combo by the time the data returns

        // If it's already in cache, just re-fetch it and render
        var dataAccessKey = _currentCompleteKey;
        if (_ResultsAreInDataStore(dataAccessKey))
        {
            _RenderCurrentView();
            return;
        }

        // Otherwise tell them we're loading and fetch from server
        _ShowLoadingSpinner();

        var nocache = new Date().getMilliseconds().toString();
        $.getJSON("GetGames.ashx",
            {
                //"nocache": nocache, // odd that is needed b/c page num is changing, but in IE it is for some reason
                GameType: gamesType,
                m: sortType,
                t: filterType,
                g: genreType,
                MinBCLevel: _minBCLevel,
                p: pageNum,
                PageSize: _pageSize
            },
            function(data)
            {
                // Store the data
                _StoreJSONData(gamesType, sortType, filterType, genreType, pageNum, data);

                var preFetchKey = _GenerateCompleteKey(gamesType, sortType, filterType, genreType, pageNum);

                // Check to see if the user has clicked away
                if (preFetchKey != _currentCompleteKey)
                {
                    return; // Just break out (we've cached the data for rendering later)
                }

                // Render it
                _RenderCurrentView();
            });
    };
    this.SetPageSize = function(size)
    {
        _pageSize = size;
    };
    this.LoadFromUrl = function()
    {
        // This sucks.  Unfortunately Chrome seems to be calling LoadFromUrl twice and the second time we
        // can't access anything from $.address, which is messing up the combo.  So we're using this to make sure we only ever load from the url when appropriate
        if (_isPageLoad)
        {
            _isPageLoad = false;
            return;
        }

        var genreType = "all";
        // If we're going back to a url of the form: www.roblox.com/medieval-games?t=PastDay we won't have 
        // anything in the $.address library form (no hash, path, etc). So we have to resort to looking at location and query string.
        if ($.address.parameter('g') != null)
            genreType = $.address.parameter('g');
        else if (getParameterByName('g') != '')
            genreType = getParameterByName('g');
        else if ($.address.path() != '/')
            genreType = $.address.path().replace('/', '').replace('-games', '');
        else 
        {
            var location = window.location.href;
            var indexHyphen = location.indexOf("-games");
            var indexOfCom = location.indexOf(".com/");
            if (indexHyphen > 0 && indexOfCom > 0)
            {
                genreType = location.substr(indexOfCom + 5, indexHyphen - (indexOfCom + 5)); 
            }
        }

        var filterType = 'Now';
        if ($.address.parameter('t') != null)
            filterType = $.address.parameter('t');
        else if (getParameterByName('t') != '')
            filterType = getParameterByName('t');

        var sortType = 'MostPopular';
        if ($.address.parameter('m') != null)
            sortType = $.address.parameter('m');
        else if (getParameterByName('m') != '')
            sortType = getParameterByName('m');
        
        if ($.inArray(sortType, CreateGamesDisplay.prototype._possibleSortTypes) == -1) // Backwards compatibility for "RecentlyUpdated"
            sortType = "MostPopular";   
            
        var pageNum = 1;
        if ($.address.parameter('p') != null)
            pageNum = parseInt($.address.parameter('p'));
        else if (getParameterByName('p') != '')
            pageNum = parseInt(getParameterByName('p'));

        var gamesType = 'Play';

        CreateGamesDisplay.prototype._UpdatePageState(gamesType, sortType, filterType, genreType);
        this.SetCurrentPageNum(pageNum);
        this.ShowGames();
    };
    this.Init = function(seedParams, seedData, renderTo)
    {
        var gameType = seedParams.GameTypeString;
        var sortType = seedParams.SortString;
        var filterType = seedParams.FilterString;
        var genreType = seedParams.GenreString;
        var pageNum = parseInt(seedParams.PageNumString);

        _minBCLevel = seedParams.MinBCLevelString;
        _renderTo = renderTo;

        _StoreJSONData(gameType, sortType, filterType, genreType, pageNum, seedData);
        CreateGamesDisplay.prototype._SetCurrentCombo(gameType, sortType, filterType, genreType);
        CreateGamesDisplay.prototype._SetActiveTab(gameType, sortType);
        this.SetCurrentPageNum(pageNum);
        _RenderCurrentView();
    };
    this.ChangePage = function(direction)
    {
        if (direction == 'Next')
        {
            this.SetCurrentPageNum(_GetCurrentPageNum() + 1);
            this.ShowGames();
        }
        else if (direction == 'Prev')
        {
            this.SetCurrentPageNum(_GetCurrentPageNum() - 1);
            this.ShowGames();
        }
        if (_minBCLevel == "None") // Only refresh ads on non bc-only place paging
        {
            AdRefresher.RefreshAds();
        }
    };
}
CreateGamesDisplay.prototype._GetCurrentSortType = function()
{
    var p = CreateGamesDisplay.prototype;
    return p._sortType[p._gamesType];
}

// Refers to everything EXCEPT page number
CreateGamesDisplay.prototype._GenerateCurrentComboKey = function()
{
    var p = CreateGamesDisplay.prototype;
    return p._GenerateComboKey(p._gamesType, p._sortType[p._gamesType], p._filterType, p._genreType);
}
CreateGamesDisplay.prototype._GenerateComboKey = function(gamesType, sortType, filterType, genreType)
{
    return gamesType + sortType + filterType + genreType;
}
CreateGamesDisplay.prototype._SetCurrentCombo = function (gamesType, sortType, filterType, genreType) {
    var p = CreateGamesDisplay.prototype;
    var hasChanged = false;
    if (p._gamesType != gamesType) {
        hasChanged = true;
        p._gamesType = gamesType;
    }
    if (p._filterType != filterType) // This has to come before Sort because of TopFavorites not allowing "Now" filter
    {
        hasChanged = true;
        p._filterType = filterType;
        //Toggle the link to bold (remove old selected link)
        $('.SelectedFilter').removeClass('SelectedFilter');
        $('#Timespan').find('[filter="' + p._filterType + '"]').addClass('SelectedFilter');
    }
    if (p._sortType[gamesType] != sortType) {
        hasChanged = true;
        p._sortType[gamesType] = sortType;
        // TopFavorites does not support the "Now" filter, so we need to disable and change it if it's the current filter
        if (sortType == "TopFavorites") {
            if (p._filterType == "Now") {
                p._filterType = "PastWeek";
                $('.SelectedFilter').removeClass('SelectedFilter');
                $('#Timespan').find('[filter="' + p._filterType + '"]').addClass('SelectedFilter');
            }


            $('#Timespan').find('.DisabledFilter').removeAttr('disabled');
            $('#Timespan').find('.DisabledFilter').removeClass('DisabledFilter');
            $('#Timespan').find('[filter="' + p._filterType + '"]').addClass('SelectedFilter');

            var now = $('#Timespan').find('[filter="Now"]');
            now.attr('disabled', 'disabled');
            now.addClass('DisabledFilter');
            //now.css('color', 'black');

            
            $('#Genres').find('.DisabledFilter').removeAttr('disabled');
            $('#Genres').find('.DisabledFilter').removeClass('DisabledFilter');
            $('#Genres').find('[genre="' + p._genreType + '"]').addClass('SelectedGenre');

        }
        else if (sortType == "MyFavorites") {
            $('#Timespan').find('.GamesFilter').addClass('DisabledFilter');
            $('#Timespan').find('.GamesFilter').attr('disabled', 'disabled');
            $('#Timespan').find('.SelectedFilter').removeClass('SelectedFilter');

            $('#Genres').find('.GamesGenre').addClass('DisabledFilter');
            $('#Genres').find('.GamesGenre').attr('disabled', 'disabled');
            $('#Genres').find('.SelectedGenre').removeClass('SelectedGenre');
        }
        else {
            var now = $('#Timespan').find('[filter="Now"]');
            now.removeAttr('disabled');
            now.removeClass('DisabledFilter');
            //now.css('color', '');
            
            //remove the class of disabled filter and find the selected filter type and apply that
            $('#Timespan').find('.DisabledFilter').removeAttr('disabled');
            $('#Timespan').find('.DisabledFilter').removeClass('DisabledFilter');
            $('#Timespan').find('[filter="' + p._filterType + '"]').addClass('SelectedFilter');

            $('#Genres').find('.DisabledFilter').removeAttr('disabled');
            $('#Genres').find('.DisabledFilter').removeClass('DisabledFilter');
            $('#Genres').find('[genre="' + p._genreType + '"]').addClass('SelectedGenre');

        }
    }
    if (p._genreType != genreType) {
        hasChanged = true;
        p._genreType = genreType;

        //Toggle the link to bold (remove old selected link)
        $('.SelectedGenre').removeClass('SelectedGenre');
        $('#Genres').find('[genre="' + p._genreType + '"]').addClass('SelectedGenre');
    }

    if (!hasChanged)  // Prevents infinite looping
        return;

    // Loop through and update other links
    $('.GamesGenre').each(function () {
        UpdateGenreLinks(this, CreateGamesDisplay.prototype._filterType);
    });
    $('.GamesFilter').each(function () {
        UpdateFilterLinks(this, CreateGamesDisplay.prototype._genreType);
    })


}
CreateGamesDisplay.prototype._SetActiveTab = function(gamesType, sortType)
{
    var p = CreateGamesDisplay.prototype;
    // Change games type
    if (gamesType != p._gamesType)
    {
        if (gamesType == 'Play')
        {
            $('#PlayTabs').show();
            $('#BuildTabs').hide();
            $('#PlayButton').attr('class', 'PlayButtonSelected');
            $('#BuildButton').attr('class', 'BuildButton');
        }
        else if (gamesType == 'Build')
        {
            $('#BuildTabs').show();
            $('#PlayTabs').hide();
            $('#BuildButton').attr('class', 'BuildButtonSelected');
            $('#PlayButton').attr('class', 'PlayButton');
        }
    }

    // Set current one to inactive
    var activeTab = $('#PlayTabs .StandardTabGrayActive');
    activeTab.removeClass('StandardTabGrayActive');
    activeTab.addClass('StandardTabGray');
    
    // Trick for finding the id of the tab to select
    var tabId = gamesType + sortType.replace(' ', '') + "Tab";
    var inactiveTab = $('#' + tabId);
    inactiveTab.removeClass('StandardTabGray');
    inactiveTab.addClass('StandardTabGrayActive');
}

CreateGamesDisplay.prototype._UpdatePageState = function(gamesType, sortType, filterType, genreType)
{
    // Change the tabs visually
    CreateGamesDisplay.prototype._SetActiveTab(gamesType, sortType);

    // Set the current combo values
    CreateGamesDisplay.prototype._SetCurrentCombo(gamesType, sortType, filterType, genreType);

    // Refresh Ads
    AdRefresher.RefreshAds();
}
CreateGamesDisplay.prototype.SetGamesType = function(gamesType)
{
    var p = CreateGamesDisplay.prototype;
    p._hasBeenClicked = true;
    // We're changing between Play / Build
    if (gamesType != p._gamesType)
    {
        var sortType = p._sortType[gamesType]; // Get the sort type for the specific games type
        var pageNumKey = p._GenerateComboKey(gamesType, sortType, p._filterType, p._genreType);

        p._UpdatePageState(gamesType, sortType, p._filterType, p._genreType);
    }
}
CreateGamesDisplay.prototype.SetSortType = function(sortType)
{
    var p = CreateGamesDisplay.prototype;
    // Changing between MostPopular / TopFavorites, etc.
    if (sortType != p._sortType[p._gamesType])
    {
        p._UpdatePageState(p._gamesType, sortType, p._filterType, p._genreType);
    }
}
CreateGamesDisplay.prototype.SetFilterType = function(filterType)
{
    var p = CreateGamesDisplay.prototype;
    // Changing between Now / Past Day, etc.
    if (filterType != p._filterType)
    {
        var sortType = p._sortType[p._gamesType]; // Get the sort type for the specific games type
        p._UpdatePageState(p._gamesType, sortType, filterType, p._genreType);
    }
}
CreateGamesDisplay.prototype.SetGenreType = function(genreType)
{
    var p = CreateGamesDisplay.prototype;
    // Changing between All / Town and City, etc.
    if (genreType != p._genreType)
    {
        var sortType = p._sortType[p._gamesType]; // Get the sort type for the specific games type
        p._UpdatePageState(p._gamesType, sortType, p._filterType, genreType);
        // Update the genre description panel
        var genresInfoText = unescape($('.GamesGenre[genre="' + genreType + '"]').attr('genresinfotext'));
        $('#GenreDescriptionPanelGenresInfoText').html(genresInfoText);
    }
}

function ResetHREFs()
{
    $('.GamesFilter').each(function()
    {
        UpdateFilterLinks(this, '');
    });

    $('.GamesGenre').each(function()
    {
        UpdateGenreLinks(this, '');
    });
}

function UpdateGenreLinks(genreobj, newFilter)
{
    /* Hack, use our address parsing library to generate our new HREF urls... */
    
    // Genre
    var newGenre = $(genreobj).attr('genre');       // Get the genre of the link we're iterating on
    
    var oldGenre = $.address.path();                // Store the current genre

    $.address.path(newGenre+'-games');              // Set it to the new one
    
    // Filter
    var oldFilter = $.address.parameter('t');       // Store the current value
    $.address.parameter('t', newFilter);            // Set it to the new one

    var newHash = $.address.value();          // Store the new hash (for href)

    $.address.parameter('t', oldFilter);            // Reset to old filter

    $.address.path(oldGenre);                       // Reset to old genre

    $(genreobj).attr('href', newHash);
}

function UpdateFilterLinks(filterobj, newGenre)
{
    // Hack, use our address parsing library to generate our new HREF urls...
    var newFilter = $(filterobj).attr('filter');    // Get the filter of the link we're iterating on
    var oldFilter = $.address.parameter('t');       // Store the current value
    $.address.parameter('t', newFilter);            // Set it to the new one

    var oldGenre = $.address.path();                // Store the current genre
    $.address.path(newGenre+'-games');              // Set it to the new one

    var newHash = $.address.value();                // Store the new hash (for href)

    $.address.parameter('t', oldFilter);            // Reset to old filter
    $.address.path(oldGenre);                       // Reset to old genre

    $(filterobj).attr('href', newHash);
}

function SetupDisplay(display, renderTo, defaultParamData, defaultSeedData, pageSize)
{
    var paramJSON = defaultParamData;
    var seedJSON = defaultSeedData;

    display.SetPageSize(pageSize);
    
    // Set the seed data and render
    display.Init(paramJSON, seedJSON, renderTo);
}
CreateGamesDisplay.prototype._gamesType = 'Play';   // Possibles: Play, Build
CreateGamesDisplay.prototype._possibleSortTypes = [ 'MostPopular', 'TopFavorites', 'Featured' ];
CreateGamesDisplay.prototype._sortType = { 'Play': 'MostPopular', 'Build': 'MostPopular' }; // Associative array for currently selected tabs
CreateGamesDisplay.prototype._filterType = 'Now';   // Possibles: Now, PastDay, PastWeek, AllTime
CreateGamesDisplay.prototype._genreType = 'all';    // Possibles: All, TownandCity, Fantasy, etc...

var AdRefresher = function()
{
    var _adIds = new Array();

    this._Refresh = function(id)
    {
        // Changing src of iframe in IE adds to history: http://nirlevy.blogspot.com/2007/09/avoding-browser-history-when-changing.html
        // Thus we change the location
        var selector = '#' + id + ' iframe';
        var newSrc = $(selector).attr("src") + '&nocache=' + new Date().getMilliseconds().toString();
        var ifr = $(selector);
        var docEl = ifr[0].contentDocument;
        if (docEl === undefined)
            docEl = ifr[0].contentWindow;
        docEl.location.replace(newSrc);
    };

    return {
        RegisterAd: function(id)
        {
            _adIds.push(id);
        },
        RefreshAds: function()
        {
            for (i in _adIds)
            {
                _Refresh(_adIds[i]);
            }
        }
    }
} ();
