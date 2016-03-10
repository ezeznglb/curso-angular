



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-0e500ca0ed7ce24ec1e3d688d938a656e4b3bdb7d7b54aa7857ce55f18064f3c.css" integrity="sha256-DlAMoO184k7B49aI2TimVuSzvbfXtUqnhXzlXxgGTzw=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-20be5a169b01b507cb7781d47166f1e1e8ae4000f6959f6f939dee299d9e6238.css" integrity="sha256-IL5aFpsBtQfLd4HUcWbx4eiuQAD2lZ9vk53uKZ2eYjg=" media="all" rel="stylesheet" />
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-e677f2022a5d36e8f5ad35d0fcb01f83f1cdb613eda0449f533197693bcc6bda.js" rel="preload" />
    <link as="script" href="https://assets-cdn.github.com/assets/github-07a7be4da34ed6599b3b37feae2bb30270d121905cb7f0b26019bd54badddb6d.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>ngStorage/README.md at master · gsklee/ngStorage</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars0.githubusercontent.com/u/1006291?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="gsklee/ngStorage" name="twitter:title" /><meta content="ngStorage - localStorage and sessionStorage done right for AngularJS." name="twitter:description" />
      <meta content="https://avatars0.githubusercontent.com/u/1006291?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="gsklee/ngStorage" property="og:title" /><meta content="https://github.com/gsklee/ngStorage" property="og:url" /><meta content="ngStorage - localStorage and sessionStorage done right for AngularJS." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTQxNjY2NTQ6ODVmOTcxNDVlYTBhODg1YzFlYjRlNjg3NGJjNWVmNDk6ZDk5MWNhZWQxNDAxZWJiOTgxZDY3ZDRkZThlYmVmYTBlYWM0NWU1YmY4MDA4MTMzYmQwMDRmMjJmYzJiYzBlOQ==--b475153d7de0e62cf55aadfb2ac68afc3eca3ff2">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="BE012477:5B1D:182C2B4:56E05349" name="octolytics-dimension-request_id" /><meta content="14166654" name="octolytics-actor-id" /><meta content="ezeznglb" name="octolytics-actor-login" /><meta content="b931d06d7865121a73275d69683f90738a44837af3b1a64cec3c2d1d334139fd" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="ezeznglb">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="ZGYwMjY4ZjlkY2M3NDMyMmZjODRiZDQ0ZTI1Nzk5ZjFmZTMwNzhkODkyMmE2ZDJlNjNhOWMwYTdlYTRiMzRjMHx7InJlbW90ZV9hZGRyZXNzIjoiMTkwLjEuMzYuMTE5IiwicmVxdWVzdF9pZCI6IkJFMDEyNDc3OjVCMUQ6MTgyQzJCNDo1NkUwNTM0OSJ9">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="55c2cf8535b289783246b1cd3dfa0c66e24dc868" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="1c425da42065b18fff7109ebc5c3e5cd">
    

      
  <meta name="description" content="ngStorage - localStorage and sessionStorage done right for AngularJS.">
  <meta name="go-import" content="github.com/gsklee/ngStorage git https://github.com/gsklee/ngStorage.git">

  <meta content="1006291" name="octolytics-dimension-user_id" /><meta content="gsklee" name="octolytics-dimension-user_login" /><meta content="11212142" name="octolytics-dimension-repository_id" /><meta content="gsklee/ngStorage" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="11212142" name="octolytics-dimension-repository_network_root_id" /><meta content="gsklee/ngStorage" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/gsklee/ngStorage/commits/master.atom" rel="alternate" title="Recent Commits to ngStorage:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/gsklee/ngStorage/blob/master/README.md" data-pjax-transient>
  </head>


  <body class="logged_in   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" role="img" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/gsklee/ngStorage/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/gsklee/ngStorage/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:ezeznglb"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <svg aria-hidden="true" class="octicon octicon-bell" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l0.73-0.58c0.77-0.77 0.81-2.55 1.19-4.42 0.77-3.77 4.08-5 4.08-5 0-0.55 0.45-1 1-1s1 0.45 1 1c0 0 3.39 1.23 4.16 5 0.38 1.88 0.42 3.66 1.19 4.42l0.66 0.58z m-7 4c1.11 0 2-0.89 2-2H5c0 1.11 0.89 2 2 2z"></path></svg>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus left" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="gsklee/ngStorage">This repository</span>
  </div>
    <a class="dropdown-item" href="/gsklee/ngStorage/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/ezeznglb"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@ezeznglb" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/14166654?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">ezeznglb</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/ezeznglb" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
          <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
            Explore
          </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="55c2cf8535b289783246b1cd3dfa0c66e24dc868" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="6oA0HZbGWot8sPkxSdAJlKgAU43YPdsnFO4xEP22BrAMozHI8zg1mZna7V4rksHWEddMht4F5GFaD0KyepDv/A==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

      

      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="55c2cf8535b289783246b1cd3dfa0c66e24dc868" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="66YqCiuf+aCavanXohEsrARf3AxoycJseJ2x221IqQt2StjGdYVFlTXHdUsT+g5Gz6rqGcPVMrTn0R56TtNdfA==" /></div>      <input id="repository_id" name="repository_id" type="hidden" value="11212142" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/gsklee/ngStorage/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/gsklee/ngStorage/watchers">
            72
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 0.67-0.81 1-1.28 0.53L3 10H1c-0.55 0-1-0.45-1-1V7c0-0.55 0.45-1 1-1h2l3.72-3.72c0.47-0.47 1.28-0.14 1.28 0.53z m7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06 1.97 1.97-1.97 1.97 1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06-1.97-1.97 1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/gsklee/ngStorage/unstar" class="js-toggler-form starred" data-form-nonce="55c2cf8535b289783246b1cd3dfa0c66e24dc868" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="vGcrlR4v4xeVVSjUGUdHAAJbgiu+D7ONJswbW9OELDNTNMahKsKkWWZ7w50cxVagjOr9xD7cTuoWS9Y16JRhcg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar gsklee/ngStorage"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/gsklee/ngStorage/stargazers">
          1,815
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/gsklee/ngStorage/star" class="js-toggler-form unstarred" data-form-nonce="55c2cf8535b289783246b1cd3dfa0c66e24dc868" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="J9qs+roMtZu1Hbno9it9LO3pJcSnpLQ922u6vzVygtJmG/ug5Cn4cTMCHTkyY54zIoGwCl8HHHXMScCrTcqOaA==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star gsklee/ngStorage"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/gsklee/ngStorage/stargazers">
          1,815
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/gsklee/ngStorage/fork" class="btn-with-count" data-form-nonce="55c2cf8535b289783246b1cd3dfa0c66e24dc868" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="S9gVv+Er8s8V0QaI7aJM08oTLRB+kgUsLhiog0M5G8eogcpgmmOUOdEI9KffZbVwBGniD+JYqLIYj3xklUPKCA==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of gsklee/ngStorage to your account"
                aria-label="Fork your own copy of gsklee/ngStorage to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" role="img" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1c-1.11 0-2 0.89-2 2 0 0.73 0.41 1.38 1 1.72v1.28L5 8 3 6v-1.28c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72v1.78l3 3v1.78c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V9.5l3-3V4.72c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2zM2 4.2c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3 10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3-10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
              Fork
            </button>
</form>
    <a href="/gsklee/ngStorage/network" class="social-count">
      365
    </a>
  </li>
</ul>

    <h1 class="entry-title public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9h-1v-1h1v1z m0-3h-1v1h1v-1z m0-2h-1v1h1v-1z m0-2h-1v1h1v-1z m8-1v12c0 0.55-0.45 1-1 1H6v2l-1.5-1.5-1.5 1.5V14H1c-0.55 0-1-0.45-1-1V1C0 0.45 0.45 0 1 0h10c0.55 0 1 0.45 1 1z m-1 10H1v2h2v-1h3v1h5V11z m0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/gsklee" class="url fn" rel="author">gsklee</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/gsklee/ngStorage" data-pjax="#js-repo-pjax-container">ngStorage</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/gsklee/ngStorage" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /gsklee/ngStorage" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3l-1.5 1.5 3.5 3.5L8 11.5l1.5 1.5 4.5-5L9.5 3zM4.5 3L0 8l4.5 5 1.5-1.5L2.5 8l3.5-3.5L4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/gsklee/ngStorage/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /gsklee/ngStorage/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">28</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/gsklee/ngStorage/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /gsklee/ngStorage/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28c0-1.73 0-6.28 0-6.28-0.03-0.78-0.34-1.47-0.94-2.06s-1.28-0.91-2.06-0.94c0 0-1.02 0-1 0V0L4 3l3 3V4h1c0.27 0.02 0.48 0.11 0.69 0.31s0.3 0.42 0.31 0.69v6.28c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72z m-1 2.92c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2zM4 3c0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72 0 1.55 0 5.56 0 6.56-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V4.72c0.59-0.34 1-0.98 1-1.72z m-0.8 10c0 0.66-0.55 1.2-1.2 1.2s-1.2-0.55-1.2-1.2 0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2z m-1.2-8.8c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">10</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/gsklee/ngStorage/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /gsklee/ngStorage/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M2 5h4v1H2v-1z m0 3h4v-1H2v1z m0 2h4v-1H2v1z m11-5H9v1h4v-1z m0 2H9v1h4v-1z m0 2H9v1h4v-1z m2-6v9c0 0.55-0.45 1-1 1H8.5l-1 1-1-1H1c-0.55 0-1-0.45-1-1V3c0-0.55 0.45-1 1-1h5.5l1 1 1-1h5.5c0.55 0 1 0.45 1 1z m-8 0.5l-0.5-0.5H1v9h6V3.5z m7-0.5H8.5l-0.5 0.5v8.5h6V3z"></path></svg>
      Wiki
</a>
  <a href="/gsklee/ngStorage/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /gsklee/ngStorage/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0V10h3.6L4.5 8.2l0.9 5.4L9 8.5l1.6 1.5H14V8H11.5z"></path></svg>
    Pulse
</a>
  <a href="/gsklee/ngStorage/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /gsklee/ngStorage/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15z m-11-1H3V8h2v5z m4 0H7V3h2v10z m4 0H11V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/gsklee/ngStorage/blob/b41d73b744c9524784f44abad4c574377ba10acc/README.md" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:d8d047cc600e05d3b842b63e93f2454a -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/gsklee/ngStorage/blob/develop/README.md"
               data-name="develop"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="develop">
                develop
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/gsklee/ngStorage/blob/master/README.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/gsklee/ngStorage/tree/0.3.10/README.md"
              data-name="0.3.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.10">
                0.3.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/gsklee/ngStorage/tree/0.3.9/README.md"
              data-name="0.3.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.9">
                0.3.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/gsklee/ngStorage/tree/0.3.8/README.md"
              data-name="0.3.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.8">
                0.3.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/gsklee/ngStorage/tree/0.3.7/README.md"
              data-name="0.3.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.7">
                0.3.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/gsklee/ngStorage/tree/0.3.6/README.md"
              data-name="0.3.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.6">
                0.3.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/gsklee/ngStorage/tree/0.3.5/README.md"
              data-name="0.3.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.5">
                0.3.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/gsklee/ngStorage/tree/0.3.4/README.md"
              data-name="0.3.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.4">
                0.3.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/gsklee/ngStorage/tree/0.3.3/README.md"
              data-name="0.3.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.3">
                0.3.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/gsklee/ngStorage/tree/0.3.0/README.md"
              data-name="0.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.0">
                0.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/gsklee/ngStorage/tree/0.2.3/README.md"
              data-name="0.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.2.3">
                0.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/gsklee/ngStorage/tree/0.2.2/README.md"
              data-name="0.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.2.2">
                0.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/gsklee/ngStorage/tree/0.2.1/README.md"
              data-name="0.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.2.1">
                0.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/gsklee/ngStorage/tree/0.2.0/README.md"
              data-name="0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.2.0">
                0.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/gsklee/ngStorage/tree/0.1.0/README.md"
              data-name="0.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.1.0">
                0.1.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/gsklee/ngStorage/find/master"
          class="js-show-file-finder btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/gsklee/ngStorage"><span>ngStorage</span></a></span></span><span class="separator">/</span><strong class="final-path">README.md</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/gsklee/ngStorage/commit/f735d5609e38b7d4741f052bac4a352831458df5" data-pjax>
          f735d56
        </a>
        <time datetime="2015-08-20T14:04:11Z" is="relative-time">Aug 20, 2015</time>
      </span>
      <div>
        <img alt="@manumiranda" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/13812930?v=3&amp;s=40" width="20" />
        <a href="/manumiranda" class="user-mention" rel="contributor">manumiranda</a>
          <a href="/gsklee/ngStorage/commit/f735d5609e38b7d4741f052bac4a352831458df5" class="message" data-pjax="true" title="Update README.md">Update README.md</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>5</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="egilkh" href="/gsklee/ngStorage/commits/master/README.md?author=egilkh"><img alt="@egilkh" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/126466?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="gsklee" href="/gsklee/ngStorage/commits/master/README.md?author=gsklee"><img alt="@gsklee" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1006291?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="manumiranda" href="/gsklee/ngStorage/commits/master/README.md?author=manumiranda"><img alt="@manumiranda" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/13812930?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="dcfsc" href="/gsklee/ngStorage/commits/master/README.md?author=dcfsc"><img alt="@dcfsc" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/4459911?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="stylenclass" href="/gsklee/ngStorage/commits/master/README.md?author=stylenclass"><img alt="@stylenclass" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1461892?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@egilkh" height="24" src="https://avatars1.githubusercontent.com/u/126466?v=3&amp;s=48" width="24" />
            <a href="/egilkh">egilkh</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@gsklee" height="24" src="https://avatars1.githubusercontent.com/u/1006291?v=3&amp;s=48" width="24" />
            <a href="/gsklee">gsklee</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@manumiranda" height="24" src="https://avatars3.githubusercontent.com/u/13812930?v=3&amp;s=48" width="24" />
            <a href="/manumiranda">manumiranda</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@dcfsc" height="24" src="https://avatars3.githubusercontent.com/u/4459911?v=3&amp;s=48" width="24" />
            <a href="/dcfsc">dcfsc</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@stylenclass" height="24" src="https://avatars2.githubusercontent.com/u/1461892?v=3&amp;s=48" width="24" />
            <a href="/stylenclass">stylenclass</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/gsklee/ngStorage/raw/master/README.md" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/gsklee/ngStorage/blame/master/README.md" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/gsklee/ngStorage/commits/master/README.md" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-0.55 0-1 0.45-1 1v9c0 0.55 0.45 1 1 1h5.34c-0.25 0.61-0.86 1.39-2.34 2h8c-1.48-0.61-2.09-1.39-2.34-2h5.34c0.55 0 1-0.45 1-1V3c0-0.55-0.45-1-1-1z m0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/gsklee/ngStorage/edit/master/README.md" class="inline-form js-update-url-with-hash" data-form-nonce="55c2cf8535b289783246b1cd3dfa0c66e24dc868" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="cKbn641lJ1CBuyQfrnZC6flcMMlSSiuJTRAgQY2enYcWNap0zJUM8vqPm36/vjdH477ZeomN/3wf//9g+xEOOQ==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3L0 12z m3 2H1V12h1v1h1v1z m10.3-9.3l-1.3 1.3-3-3 1.3-1.3c0.39-0.39 1.02-0.39 1.41 0l1.59 1.59c0.39 0.39 0.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/gsklee/ngStorage/delete/master/README.md" class="inline-form" data-form-nonce="55c2cf8535b289783246b1cd3dfa0c66e24dc868" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Uamcvl++5DDHGugagsa5m6EFcFfZJwJHFXPDHO13CPYN8wO+9FJvQ6a/bv5lU51cY4iPwk0uGikA0Cu1JSatzQ==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M10 2H8c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1H1c-0.55 0-1 0.45-1 1v1c0 0.55 0.45 1 1 1v9c0 0.55 0.45 1 1 1h7c0.55 0 1-0.45 1-1V5c0.55 0 1-0.45 1-1v-1c0-0.55-0.45-1-1-1z m-1 12H2V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9z m1-10H1v-1h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      245 lines (173 sloc)
      <span class="file-info-divider"></span>
    6.86 KB
  </div>
</div>

  
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-ngstorage" class="anchor" href="#ngstorage" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>ngStorage</h1>

<p><a href="https://travis-ci.org/gsklee/ngStorage"><img src="https://camo.githubusercontent.com/01768be3314462046b45f8f7667c5c8ef07e643e/68747470733a2f2f7472617669732d63692e6f72672f67736b6c65652f6e6753746f726167652e737667" alt="Build Status" data-canonical-src="https://travis-ci.org/gsklee/ngStorage.svg" style="max-width:100%;"></a>
<a href="https://david-dm.org/gsklee/ngStorage"><img src="https://camo.githubusercontent.com/9eeecc1c893a6ff17861e703d1c411bbd9f22ce2/68747470733a2f2f64617669642d646d2e6f72672f67736b6c65652f6e6753746f726167652e737667" alt="Dependency Status" data-canonical-src="https://david-dm.org/gsklee/ngStorage.svg" style="max-width:100%;"></a>
<a href="https://david-dm.org/gsklee/ngStorage#info=devDependencies"><img src="https://camo.githubusercontent.com/635f2ce1125ad62365ae620380b12ae2021d79d1/68747470733a2f2f64617669642d646d2e6f72672f67736b6c65652f6e6753746f726167652f6465762d7374617475732e737667" alt="devDependency Status" data-canonical-src="https://david-dm.org/gsklee/ngStorage/dev-status.svg" style="max-width:100%;"></a></p>

<p>An <a href="https://github.com/angular/angular.js">AngularJS</a> module that makes Web Storage working in the <em>Angular Way</em>. Contains two services: <code>$localStorage</code> and <code>$sessionStorage</code>.</p>

<h3><a id="user-content-differences-with-other-implementations" class="anchor" href="#differences-with-other-implementations" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Differences with Other Implementations</h3>

<ul>
<li><p><strong>No Getter 'n' Setter Bullshit</strong> - Right from AngularJS homepage: "Unlike other frameworks, there is no need to [...] wrap the model in accessors methods. Just plain old JavaScript here." Now you can enjoy the same benefit while achieving data persistence with Web Storage.</p></li>
<li><p><strong>sessionStorage</strong> - We got this often-overlooked buddy covered.</p></li>
<li><p><strong>Cleanly-Authored Code</strong> - Written in the <em>Angular Way</em>, well-structured with testability in mind.</p></li>
<li><p><strong>No Cookie Fallback</strong> - With Web Storage being <a href="http://caniuse.com/namevalue-storage">readily available</a> in <a href="http://docs.angularjs.org/misc/faq#canidownloadthesourcebuildandhosttheangularjsenvironmentlocally">all the browsers AngularJS officially supports</a>, such fallback is largely redundant.</p></li>
</ul>

<h1><a id="user-content-install" class="anchor" href="#install" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Install</h1>

<h3><a id="user-content-bower" class="anchor" href="#bower" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Bower</h3>

<div class="highlight highlight-source-shell"><pre>bower install ngstorage</pre></div>

<p><em>NOTE:</em> We are <code>ngstorage</code> and <em>NOT</em> <code>ngStorage</code>. The casing is important!</p>

<h3><a id="user-content-npm" class="anchor" href="#npm" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>NPM</h3>

<div class="highlight highlight-source-shell"><pre>npm install ngstorage</pre></div>

<p><em>NOTE:</em> We are <code>ngstorage</code> and <em>NOT</em> <code>ngStorage</code>. The casing is important!</p>

<h1><a id="user-content-cdn" class="anchor" href="#cdn" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>CDN</h1>

<h3><a id="user-content-cdnjs" class="anchor" href="#cdnjs" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>cdnjs</h3>

<p>cdnjs now hosts ngStorage at <a href="https://cdnjs.com/libraries/ngStorage">https://cdnjs.com/libraries/ngStorage</a></p>

<p>To use it</p>

<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.6/ngStorage.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</pre></div>

<h3><a id="user-content-jsdelivr" class="anchor" href="#jsdelivr" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>jsDelivr</h3>

<p>jsDelivr hosts ngStorage at <a href="http://www.jsdelivr.com/#!ngstorage">http://www.jsdelivr.com/#!ngstorage</a></p>

<p>To use is</p>

<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://cdn.jsdelivr.net/ngstorage/0.3.6/ngStorage.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</pre></div>

<h1><a id="user-content-usage" class="anchor" href="#usage" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Usage</h1>

<h3><a id="user-content-require-ngstorage-and-inject-the-services" class="anchor" href="#require-ngstorage-and-inject-the-services" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Require ngStorage and Inject the Services</h3>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">angular</span>.<span class="pl-en">module</span>(<span class="pl-s"><span class="pl-pds">'</span>app<span class="pl-pds">'</span></span>, [
    <span class="pl-s"><span class="pl-pds">'</span>ngStorage<span class="pl-pds">'</span></span>
]).<span class="pl-en">controller</span>(<span class="pl-s"><span class="pl-pds">'</span>Ctrl<span class="pl-pds">'</span></span>, <span class="pl-k">function</span>(
    <span class="pl-smi">$scope</span>,
    <span class="pl-smi">$localStorage</span>,
    <span class="pl-smi">$sessionStorage</span>
){});</pre></div>

<h3><a id="user-content-read-and-write--demo" class="anchor" href="#read-and-write--demo" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Read and Write | <a href="http://plnkr.co/edit/3vfRkvG7R9DgQxtWbGHz?p=preview">Demo</a></h3>

<p>Pass <code>$localStorage</code> (or <code>$sessionStorage</code>) by reference to a hook under <code>$scope</code> in plain ol' JavaScript:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">$scope</span>.<span class="pl-smi">$storage</span> <span class="pl-k">=</span> $localStorage;</pre></div>

<p>And use it like you-already-know:</p>

<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">body</span> <span class="pl-e">ng-controller</span>=<span class="pl-s"><span class="pl-pds">"</span>Ctrl<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent">button</span> <span class="pl-e">ng-click</span>=<span class="pl-s"><span class="pl-pds">"</span>$storage.counter = $storage.counter + 1<span class="pl-pds">"</span></span>&gt;{{$storage.counter}}&lt;/<span class="pl-ent">button</span>&gt;
&lt;/<span class="pl-ent">body</span>&gt;</pre></div>

<blockquote>
<p>Optionally, specify default values using the <code>$default()</code> method:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">$scope</span>.<span class="pl-smi">$storage</span> <span class="pl-k">=</span> <span class="pl-smi">$localStorage</span>.<span class="pl-en">$default</span>({
    counter<span class="pl-k">:</span> <span class="pl-c1">42</span>
});</pre></div>
</blockquote>

<p>With this setup, changes will be automatically sync'd between <code>$scope.$storage</code>, <code>$localStorage</code>, and localStorage - even across different browser tabs!</p>

<h3><a id="user-content-read-and-write-alternative-not-recommended--demo" class="anchor" href="#read-and-write-alternative-not-recommended--demo" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Read and Write Alternative (Not Recommended) | <a href="http://plnkr.co/edit/9ZmkzRkYzS3iZkG8J5IK?p=preview">Demo</a></h3>

<p>If you're not fond of the presence of <code>$scope.$storage</code>, you can always use watchers:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">$scope</span>.<span class="pl-smi">counter</span> <span class="pl-k">=</span> <span class="pl-smi">$localStorage</span>.<span class="pl-smi">counter</span> <span class="pl-k">||</span> <span class="pl-c1">42</span>;

<span class="pl-smi">$scope</span>.<span class="pl-en">$watch</span>(<span class="pl-s"><span class="pl-pds">'</span>counter<span class="pl-pds">'</span></span>, <span class="pl-k">function</span>() {
    <span class="pl-smi">$localStorage</span>.<span class="pl-smi">counter</span> <span class="pl-k">=</span> <span class="pl-smi">$scope</span>.<span class="pl-smi">counter</span>;
});

<span class="pl-smi">$scope</span>.<span class="pl-en">$watch</span>(<span class="pl-k">function</span>() {
    <span class="pl-k">return</span> <span class="pl-smi">angular</span>.<span class="pl-en">toJson</span>($localStorage);
}, <span class="pl-k">function</span>() {
    <span class="pl-smi">$scope</span>.<span class="pl-smi">counter</span> <span class="pl-k">=</span> <span class="pl-smi">$localStorage</span>.<span class="pl-smi">counter</span>;
});</pre></div>

<p>This, however, is not the way ngStorage is designed to be used with. As can be easily seen by comparing the demos, this approach is way more verbose, and may have potential performance implications as the values being watched quickly grow.</p>

<h3><a id="user-content-delete--demo" class="anchor" href="#delete--demo" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Delete | <a href="http://plnkr.co/edit/o4w3VGqmp8opfrWzvsJy?p=preview">Demo</a></h3>

<p>Plain ol' JavaScript again, what else could you better expect?</p>

<div class="highlight highlight-source-js"><pre><span class="pl-c">// Both will do</span>
<span class="pl-k">delete</span> <span class="pl-smi">$scope</span>.<span class="pl-smi">$storage</span>.<span class="pl-smi">counter</span>;
<span class="pl-k">delete</span> <span class="pl-smi">$localStorage</span>.<span class="pl-smi">counter</span>;</pre></div>

<p>This will delete the corresponding entry inside the Web Storage.</p>

<h3><a id="user-content-delete-everything--demo" class="anchor" href="#delete-everything--demo" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Delete Everything | <a href="http://plnkr.co/edit/YiG28KTFdkeFXskolZqs?p=preview">Demo</a></h3>

<p>If you wish to clear the Storage in one go, use the <code>$reset()</code> method:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">$localStorage</span>.<span class="pl-en">$reset</span>();</pre></div>

<blockquote>
<p>Optionally, pass in an object you'd like the Storage to reset to:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">$localStorage</span>.<span class="pl-en">$reset</span>({
    counter<span class="pl-k">:</span> <span class="pl-c1">42</span>
});</pre></div>
</blockquote>

<h3><a id="user-content-permitted-values--demo" class="anchor" href="#permitted-values--demo" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Permitted Values | <a href="http://plnkr.co/edit/n0acYLdhk3AeZmPOGY9Z?p=preview">Demo</a></h3>

<p>You can store anything except those <a href="http://www.json.org/js.html">not supported by JSON</a>:</p>

<ul>
<li><code>Infinity</code>, <code>NaN</code> - Will be replaced with <code>null</code>.</li>
<li><code>undefined</code>, Function - Will be removed.</li>
</ul>

<h3><a id="user-content-usage-from-config-phase" class="anchor" href="#usage-from-config-phase" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Usage from config phase</h3>

<p>To read and set values during the Angular config phase use the <code>.get/.set</code>
functions provided by the provider.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> app <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-en">module</span>(<span class="pl-s"><span class="pl-pds">'</span>app<span class="pl-pds">'</span></span>, [<span class="pl-s"><span class="pl-pds">'</span>ngStorage<span class="pl-pds">'</span></span>])
.<span class="pl-en">config</span>([<span class="pl-s"><span class="pl-pds">'</span>$localStorageProvider<span class="pl-pds">'</span></span>,
    <span class="pl-k">function</span> (<span class="pl-smi">$localStorageProvider</span>) {
        <span class="pl-smi">$localStorageProvider</span>.<span class="pl-en">get</span>(<span class="pl-s"><span class="pl-pds">'</span>MyKey<span class="pl-pds">'</span></span>);

        <span class="pl-smi">$localStorageProvider</span>.<span class="pl-en">set</span>(<span class="pl-s"><span class="pl-pds">'</span>MyKey<span class="pl-pds">'</span></span>, { k<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>value<span class="pl-pds">'</span></span> });
    }]);</pre></div>

<h3><a id="user-content-prefix" class="anchor" href="#prefix" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Prefix</h3>

<p>To change the prefix used by ngStorage use the provider function <code>setKeyPrefix</code>
during the config phase.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> app <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-en">module</span>(<span class="pl-s"><span class="pl-pds">'</span>app<span class="pl-pds">'</span></span>, [<span class="pl-s"><span class="pl-pds">'</span>ngStorage<span class="pl-pds">'</span></span>])
.<span class="pl-en">config</span>([<span class="pl-s"><span class="pl-pds">'</span>$localStorageProvider<span class="pl-pds">'</span></span>,
    <span class="pl-k">function</span> (<span class="pl-smi">$localStorageProvider</span>) {
        <span class="pl-smi">$localStorageProvider</span>.<span class="pl-en">setKeyPrefix</span>(<span class="pl-s"><span class="pl-pds">'</span>NewPrefix<span class="pl-pds">'</span></span>);
    }])</pre></div>

<h3><a id="user-content-custom-serialization" class="anchor" href="#custom-serialization" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Custom serialization</h3>

<p>To change how ngStorage serializes and deserializes values (uses JSON by default) you can use your own functions.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">angular</span>.<span class="pl-en">module</span>(<span class="pl-s"><span class="pl-pds">'</span>app<span class="pl-pds">'</span></span>, [<span class="pl-s"><span class="pl-pds">'</span>ngStorage<span class="pl-pds">'</span></span>])
.<span class="pl-en">config</span>([<span class="pl-s"><span class="pl-pds">'</span>$localStorageProvider<span class="pl-pds">'</span></span>, 
  <span class="pl-k">function</span> (<span class="pl-smi">$localStorageProvider</span>) {
    <span class="pl-k">var</span> <span class="pl-en">mySerializer</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">value</span>) {
      <span class="pl-c">// Do what you want with the value.</span>
      <span class="pl-k">return</span> value;
    };

    <span class="pl-k">var</span> <span class="pl-en">myDeserializer</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">value</span>) {
      <span class="pl-k">return</span> value;
    };

    <span class="pl-smi">$localStorageProvider</span>.<span class="pl-en">setSerializer</span>(mySerializer);
    <span class="pl-smi">$localStorageProvider</span>.<span class="pl-en">setDeserializer</span>(myDeserializer);
  }];)</pre></div>

<h3><a id="user-content-minification" class="anchor" href="#minification" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Minification</h3>

<p>Just run <code>$ npm install</code> to install dependencies.  Then run <code>$ grunt</code> for minification.</p>

<h3><a id="user-content-hints" class="anchor" href="#hints" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Hints</h3>

<h4><a id="user-content-watch-the-watch" class="anchor" href="#watch-the-watch" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Watch the watch</h4>

<p>ngStorage internally uses an Angular watch to monitor changes to the <code>$storage</code>/<code>$localStorage</code> objects. That means that a digest cycle is required to persist your new values into the browser local storage.
Normally this is not a problem, but, for example, if you launch a new window after saving a value...</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">$scope</span>.<span class="pl-smi">$storage</span>.<span class="pl-smi">school</span> <span class="pl-k">=</span> theSchool;
<span class="pl-smi">$log</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">"</span>launching <span class="pl-pds">"</span></span> <span class="pl-k">+</span> url);
<span class="pl-k">var</span> myWindow <span class="pl-k">=</span> <span class="pl-smi">$window</span>.<span class="pl-c1">open</span>(<span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>_self<span class="pl-pds">"</span></span>);
<span class="pl-smi">myWindow</span>.<span class="pl-smi">document</span>.<span class="pl-c1">write</span>(<span class="pl-smi">response</span>.<span class="pl-c1">data</span>);</pre></div>

<p>the new values will not reliably be saved into the browser local storage. Allow a digest cycle to occur by using a zero-value <code>$timeout</code> as:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">$scope</span>.<span class="pl-smi">$storage</span>.<span class="pl-smi">school</span> <span class="pl-k">=</span> theSchool;
<span class="pl-smi">$log</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">"</span>launching and saving the new value<span class="pl-pds">"</span></span> <span class="pl-k">+</span> url);
<span class="pl-en">$timeout</span>(<span class="pl-k">function</span>(){
   <span class="pl-k">var</span> myWindow <span class="pl-k">=</span> <span class="pl-smi">$window</span>.<span class="pl-c1">open</span>(<span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>_self<span class="pl-pds">"</span></span>);
   <span class="pl-smi">myWindow</span>.<span class="pl-smi">document</span>.<span class="pl-c1">write</span>(<span class="pl-smi">response</span>.<span class="pl-c1">data</span>);
});</pre></div>

<p>And your new values will be persisted correctly.</p>

<h1><a id="user-content-todos" class="anchor" href="#todos" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Todos</h1>

<ul>
<li>ngdoc Documentation</li>
<li>Namespace Support</li>
<li>Unit Tests</li>
<li>Grunt Tasks</li>
</ul>

<p>Any contribution will be appreciated.</p>
</article>
  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="hidden">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
          <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" role="img" title="GitHub " version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.32506s from github-fe123-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-5nfyAipdNuj1rTXQ/LAfg/HNthPtoESfUzGXaTvMa9o=" src="https://assets-cdn.github.com/assets/frameworks-e677f2022a5d36e8f5ad35d0fcb01f83f1cdb613eda0449f533197693bcc6bda.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-B6e+TaNO1lmbOzf+riuzAnDRIZBct/CyYBm9VLrd220=" src="https://assets-cdn.github.com/assets/github-07a7be4da34ed6599b3b37feae2bb30270d121905cb7f0b26019bd54badddb6d.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

