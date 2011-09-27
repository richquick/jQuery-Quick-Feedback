(function($){
 
    $.fn.extend({ 
         
        //pass the options variable to the function
        feedbackTab: function(options) {
 
 			//Handy for CSS
			$body = $('body');
			$body.addClass('quickFeedback').append('<div id="feedbackWrapper"><div id="feedbackBox"><a href="#" id="feedbackClose">x</a><ul id="feedbackNav"><li class="live"><a href="#">Feedback</a></li><li><a href="#">Suggestion</a></li><li><a href="#">Problem</a></li><li><a href="#">Praise</a></li></ul><ul id="feedbackForms"><li class="currentForm"><form><div class="personalDetails"><div><label class="l1">Your name:</label><input type="text" title="Your name..." /></div><div><label class="l2">Your email:</label><input type="email" title="Your email..." /></div></div><label class="l3">Feedback</label><textarea title="Feedback goes here..."></textarea><button>Submit</button></form></li><li><form><div class="personalDetails"><div><label class="l1">Your name:</label><input type="text" title="Your name..." /></div><div><label class="l2">Your email:</label><input type="email" title="Your email..." /></div></div><label class="l3">Suggestion</label><textarea title="Suggestions go here..."></textarea><button>Submit</button></form></li><li><form><div class="personalDetails"><div><label class="l1">Your name:</label><input type="text" title="Your name..." /></div><div><label class="l2">Your email:</label><input type="email" title="Your email..." /></div></div><label class="l3">Problem</label><textarea title="Problems go here..."></textarea><button>Submit</button></form></li><li><form><div class="personalDetails"><div><label class="l1">Your name:</label><input type="text" title="Your name..." /></div><div><label class="l2">Your email:</label><input type="email" title="Your email..." /></div></div><label class="l3">Problem</label><textarea title="Problems go here..."></textarea><button>Submit</button></form></li></ul></div></div>').append('<div id="feedbackTab"><a href="#" id="feedbackTabLink">Feedback</a></div>');
			
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
				wording: 'Feedback',
				method: 'post',
				tab2: false,
				tab3: false,
				tab4: false,
				feedbackLink: 'Feedback',
				tab2Link: 'Suggestion',
				tab3Link: 'Problem',
				tab4Link: 'Praise',
				feedbackHead: 'Give us your feedback',
				tab2Head: 'What\'s your suggestion?',
				tab3Head: 'What\'s the problem?',
				tab4Head: 'What have we done that\'s great?',
				feedbackText: 'Give us some feedback about the website...',
				tab2Text: 'Got a suggestion? Let us know about it...',
				tab3Text: 'Let us know if you\'re unhappy about something we\'ve done...',
				tab4Text: 'Let us know if you\'re happy with something we\'ve done...',
				feedbackFieldName: 'feedback_field',
				tab2FieldName: 'feedback',
				tab3FieldName: 'feedback',
				tab4FieldName: 'feedback',
				feedbackNameFieldName: 'name_field',
				tab2NameFieldName: 'name',
				tab3NameFieldName: 'name',
				tab4NameFieldName: 'name',
				feedbackEmailFieldName: 'email_field',
				tab2EmailFieldName: 'email',
				tab3EmailFieldName: 'email',
				tab4EmailFieldName: 'email',
				feedbackAction: '/form/',
				tab2Action: '/form/',
				tab3Action: '/form/',
				tab4Action: '/form/'
            }
			
            // Declare variables
            var options =  $.extend(defaults, options);
 			var o = options;
			
			var $fbtlnk  = $('a', '#feedbackNav');
			var $feedbackForms = $('#feedbackForms');
			var $currentForm = $('.currentForm');
			var toggleFields = $('input[type="text"], input[type="email"], textarea');
			
			var $feedbackTab = $('#feedbackTab');
			var $feedbackTabLink = $('#feedbackTabLink');
			var $feedbackWrapper = $('#feedbackWrapper');
			var $feedbackBox = $('#feedbackBox');
			var $feedbackNav = $('#feedbackNav');
			
			var $feedbackClose = $('#feedbackClose');
			
			var $allForms = $('form', $feedbackForms);
			
			// Pull out all the options and do something with them
			
				// Update the tab wording
				$feedbackTabLink.text(o.wording);
				
				// Define the blocks
				
				$feedbackBlock = $('li:nth-child(1)', $feedbackForms);
				$tab2Block = $('li:nth-child(2)', $feedbackForms);
				$tab3Block = $('li:nth-child(3)', $feedbackForms);
				$tab4Block = $('li:nth-child(4)', $feedbackForms);
				
				// Update the nav
				$('li:nth-child(1) a', $feedbackNav).text(o.feedbackLink);
				$('li:nth-child(2) a', $feedbackNav).text(o.tab2Link);
				$('li:nth-child(3) a', $feedbackNav).text(o.tab3Link);
				$('li:nth-child(4) a', $feedbackNav).text(o.tab4Link);
				
				// Feedback form
				// Heading
				$('label.l3', $feedbackBlock).text(o.feedbackHead);
				// Title text in textarea & name attribute
				$('textarea', $feedbackBlock).attr('title', o.feedbackText).attr('name', o.feedbackFieldName);
				// Name field name attribute
				$('input[type="text"]', $feedbackBlock).attr('name', o.feedbackNameFieldName);
				// Email field name attribute
				$('input[type="email"]', $feedbackBlock).attr('name', o.feedbackEmailFieldName);
				// Feedback form action 
				$('form', $feedbackBlock).attr('action', o.feedbackAction);
				
				// tab2 form
				// Heading
				$('label.l3', $tab2Block).text(o.tab2Head);
				// Title text in textarea & name attribute
				$('textarea', $tab2Block).attr('title', o.tab2Text).attr('name', o.tab2FieldName);
				// Name field name attribute
				$('input[type="text"]', $tab2Block).attr('name', o.tab2NameFieldName);
				// Email field name attribute
				$('input[type="email"]', $tab2Block).attr('name', o.tab2EmailFieldName);
				// Feedback form action 
				$('form', $tab2Block).attr('action', o.tab2Action);
				
				// tab3 form
				// Heading
				$('label.l3', $tab3Block).text(o.tab3Head);
				// Title text in textarea & name attribute
				$('textarea', $tab3Block).attr('title', o.tab3Text).attr('name', o.tab3FieldName);
				// Name field name attribute
				$('input[type="text"]', $tab3Block).attr('name', o.tab3NameFieldName);
				// Email field name attribute
				$('input[type="email"]', $tab3Block).attr('name', o.tab3EmailFieldName);
				// Feedback form action 
				$('form', $tab3Block).attr('action', o.tab3Action);
				
				// tab4 form
				// Heading
				$('label.l3', $tab4Block).text(o.tab4Head);
				// Title text in textarea & name attribute
				$('textarea', $tab4Block).attr('title', o.tab4Text).attr('name', o.tab4FieldName);
				// Name field name attribute
				$('input[type="text"]', $tab4Block).attr('name', o.tab4NameFieldName);
				// Email field name attribute
				$('input[type="email"]', $tab4Block).attr('name', o.tab4EmailFieldName);
				// Feedback form action 
				$('form', $tab4Block).attr('action', o.tab4Action);
			
			// Check if tabs 2-4 are included. IF not, remove them.
			// Remove a tab
			function fbfRemove (thisNum) {
				//remove the nth tab
				$cssSelector = '#feedbackNav li:nth-child(' + thisNum + ')';
				$($cssSelector).hide();
			}
			
			// Remove any tabs that aren't being used
			if (o.tab2 != true) {fbfRemove(2);}
			if (o.tab3 != true) {fbfRemove(3);}
			if (o.tab4 != true) {fbfRemove(4);}
			
			// Make sure all the forms have a method
			
			if (o.method != 'get') {
				$allForms.attr('method', 'post');
			} else {
				$allForms.attr('method', 'get');
			}
			
			// Switch the feedback forms
			function fbfSwitch (thisNum) {
				
				// remove the currentForm class from all <li>s
				$currentForm.removeClass('currentForm');
				
				// Hide all forms
				$('li', $feedbackForms).hide();
				
				//Fade in the nth form
				$cssSelector = '#feedbackForms li:nth-of-type(' + thisNum + ')';
				$($cssSelector).show();
			}
			
			// Fading in and out when you click the tab
			$feedbackTabLink.live("click", function() {
				$feedbackWrapper.fadeIn();
				$feedbackTab.hide();
				return false;
			});
			
			$feedbackClose.live("click", function() {
				$feedbackTab.fadeIn();
				$feedbackWrapper.fadeOut();
				return false;
			});
			
			// Add the title text in the field
			toggleFields.each(function() {
				$this = $(this);
				var thisTitle = $this.attr('title');
				var thisValue = $this.val();
				if (thisTitle && thisValue == false) {
					$this.val(thisTitle);
				};
			});
			
			// Add and remove replacable text on form fields
			toggleFields.focus(function() {
				$this = $(this);
				thisVal = $this.val();
				thisTitle = $this.attr('title');
				if (thisVal == thisTitle) {
					$this.val('');
				}
			}).blur(function() {
				$this = $(this);
				thisVal = $this.val();
				thisTitle = $this.attr('title');
				if ($.trim(thisVal) == '') {
					$this.val(thisTitle);
				}
			});


			// The tab navigation
			// Switch the feedback forms
			function fbfSwitch (thisNum) {
				// remove the currentForm class from all <li>s
				$currentForm.removeClass('currentForm');
				
				// Hide all forms
				$('li', $feedbackForms).hide();
				
				//Fade in the nth form
				$cssSelector = '#feedbackForms li:nth-child(' + thisNum + ')';
				$($cssSelector).show();
			}
			
			// When the tbs are clicked, switch the forms
			$fbtlnk.live("click", function() {
				$this = $(this);
				$thisText = $this.text();
				$this.parent().parent().children('li').removeClass('live');
				$this.parent().addClass('live');
				
				switch ($thisText) { 
        			case o.feedbackLink: 
						fbfSwitch (1);
						break;
					case o.tab2Link: 
						fbfSwitch (2)
						break;
					case o.tab3Link: 
						fbfSwitch (3)
						break;
					case o.tab4Link: 
						fbfSwitch (4)
						break;
				}
				return false;
			});
			
        }
    });
     
})(jQuery);