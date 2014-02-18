The Hybrid Framework
====================

The Hybrid Framework is a lightweight and amazingly fast framework and set of guidelines for developing hybrid Android apps. The primary focus of this is to compile a set of independent components, that can assist in developing HTML/CSS based UI for Adroid Apps.

Is this something like jQuery Mobile?
-------------------------------------

NO. As we said, this is a set of components. This framework would NOT make it easy for you to build the interface as jQuery mobile does. But we assure you that this framework is optimized to be as fast as possible and to show almost native like performance.

Can I make web apps using this?
-------------------------------

NO. The purpose of this framework is to build User Interfaces for Android apps, that's to facilitate the production of Hybrid Android Apps. So all the CSS here are optimized specially for the webkit rendering engine and would not work in most of other browsers.

What makes thf special?
-----------------------

The problem in making hybrid apps as we saw is that most of the existing frameworks are Extremely SLOW when tested in actual devices. Reason is that those framework generate a lot of dynamic content and the mobile browsers arent the best friends with it. To minimize this, in thf our sacred rule is that ! NOTHING DYNAMIC !. Of course there are some things we cannot prevent, but most of the time, if you want an effect you must hardcode it, the framework does nothing.

Features
--------

1.  Almost 0 dynamiclly generated components
2.  Uses HTML5 + CSS3 features where available
3.  Smooth to the point it's almost like native android
4.  NO new framework syntax to learn.
5.  NO external javascript library/framework used. It's all pure javascript
6.  Lightweight
7.  Seperated into highly portable components
8.  From android styled interfaces to unique interface in minutes (once you get used to the framework ;))


Credits
-------

As you may have already noticed, most vital parts of the UI components are comming from other popular open source projects. We give full credits for them for those components.

**Fries**

https://github.com/jaunesarmiento/fries

All the fries components are used with few changes to its source to make it faster and to be webkit specific.


**Zynga Scroller**

http://zynga.github.io/scroller/

To implement push-refresh and smooth scrolling, the zynga scroller is added as an optional component. Users can decide to use or not use it.

List of available components
----------------------------

1.  Action-bar
2.  Icons for most of the buttons
3.  Accordion
4.  Buttons
5.  Dialog
6.  Drawer
7.  Forms
8.  Grid / Grid View
9.  List
10.  Slider
11.  Tabs
12.  Toasts
13.  Bouncy-smooth scrolling
14.  Pull-to-refresh for lists
