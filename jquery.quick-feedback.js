(function($){
 
    $.fn.extend({ 
         
        //pass the options variable to the function
        feedbackTab: function(options) {
 
 			//Handy for CSS
			$body = $('body');
			$body.addClass('quickFeedback').append('<div id="feedbackWrapper"><div id="feedbackBox"><a href="#" id="feedbackClose">x</a><ul id="feedbackNav"><li class="live"><a href="#">Feedback</a></li><li><a href="#">Suggestion</a></li><li><a href="#">Complaint</a></li></ul><ul id="feedbackForms"><li class="currentForm"><form><div class="personalDetails"><div><label class="l1">Your name:</label><input type="text" title="Your name..." /></div><div><label class="l2">Your email:</label><input type="email" title="Your email..." /></div></div><label class="l3">Feedback</label><textarea title="Feedback goes here..."></textarea><button>Submit</button></form></li><li><form><div class="personalDetails"><div><label class="l1">Your name:</label><input type="text" title="Your name..." /></div><div><label class="l2">Your email:</label><input type="email" title="Your email..." /></div></div><label class="l3">Suggestion</label><textarea title="Suggestions go here..."></textarea><button>Submit</button></form></li><li><form><div class="personalDetails"><div><label class="l1">Your name:</label><input type="text" title="Your name..." /></div><div><label class="l2">Your email:</label><input type="email" title="Your email..." /></div></div><label class="l3">Complaint</label><textarea title="Complaints go here..."></textarea><button>Submit</button></form></li></ul></div></div>').append('<a href="#" id="feedbackTab">Feedback</a>');

            //Set the default values, use comma to separate the settings, example:
            var defaults = {
				method: 'post',
				complaint: false,
				suggestion: false,
				feedbackHead: 'Give us your feedback',
				suggestionHead: 'What\'s your suggestion?',
				complaintHead: 'What\'s your complaint?',
				feedbackText: 'Give us some feedback about the website.',
				suggestionText: 'Got a suggestion? Let us know about it.',
				complaintText: 'Let us know if you\'re unhappy about something we\'ve done',
				feedbackFieldName: 'feedback_field',
				suggestionFieldName: 'feedback',
				complaintFieldName: 'feedback',
				feedbackNameFieldName: 'name_field',
				suggestionNameFieldName: 'name',
				complaintNameFieldName: 'name',
				feedbackEmailFieldName: 'email_field',
				suggestionEmailFieldName: 'email',
				complaintEmailFieldName: 'email',
				feedbackAction: '/form/',
				suggestionAction: '/form/',
				complaintAction: '/form/'
            }
            // Declare variables
            var options =  $.extend(defaults, options);
 			var o = options;
			
			var $fbtlnk  = $('a', '#feedbackNav');
			var $feedbackForms = $('#feedbackForms');
			var $currentForm = $('.currentForm');
			var toggleFields = $('input[type="text"], input[type="email"], textarea');
			
			var $feedbackTab = $('#feedbackTab');
			var $feedbackWrapper = $('#feedbackWrapper');
			var $feedbackBox = $('#feedbackBox');
			
			var $feedbackClose = $('#feedbackClose');
			
			var $allForms = $('form', $feedbackForms);
			
			// Pull out all the options and do something with them
			
				// Define the blocks
				$feedbackBlock = $('li:nth-of-type(1)', $feedbackForms);
				$suggestionBlock = $('li:nth-of-type(2)', $feedbackForms);
				$complaintBlock = $('li:nth-of-type(3)', $feedbackForms);
			
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
				
				// Suggestion form
				// Heading
				$('label.l3', $suggestionBlock).text(o.suggestionHead);
				// Title text in textarea & name attribute
				$('textarea', $suggestionBlock).attr('title', o.suggestionText).attr('name', o.suggestionFieldName);
				// Name field name attribute
				$('input[type="text"]', $suggestionBlock).attr('name', o.suggestionNameFieldName);
				// Email field name attribute
				$('input[type="email"]', $suggestionBlock).attr('name', o.suggestionEmailFieldName);
				// Feedback form action 
				$('form', $suggestionBlock).attr('action', o.suggestionAction);
				
				// Complaints form
				// Heading
				$('label.l3', $complaintBlock).text(o.complaintHead);
				// Title text in textarea & name attribute
				$('textarea', $complaintBlock).attr('title', o.complaintText).attr('name', o.complaintFieldName);
				// Name field name attribute
				$('input[type="text"]', $complaintBlock).attr('name', o.complaintNameFieldName);
				// Email field name attribute
				$('input[type="email"]', $complaintBlock).attr('name', o.complaintEmailFieldName);
				// Feedback form action 
				$('form', $complaintBlock).attr('action', o.complaintAction);
			
			// Check if complaint and suggestion are included. IF not, remove them.
			// Remove a tab
			function fbfRemove (thisNum) {
				//remove the nth tab
				$cssSelector = '#feedbackNav li:nth-of-type(' + thisNum + ')';
				$($cssSelector).hide();
			}
			
			if (o.suggestion != true) {
				fbfRemove(2);
			}
			
			if (o.complaint != true) {
				fbfRemove(3);
			}
			
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
			$feedbackTab.live("click", function() {
				$this = $(this);
				$feedbackWrapper.fadeIn();
				$this.fadeOut();
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
				if (thisVal.trim() == '') {
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
				$cssSelector = '#feedbackForms li:nth-of-type(' + thisNum + ')';
				$($cssSelector).show();
			}
			
			// When the tbs are clicked, switch the forms
			$fbtlnk.live("click", function() {
				$this = $(this);
				$thisText = $this.text();
				$this.parent().parent().children('li').removeClass('live');
				$this.parent().addClass('live');
				
				switch ($thisText) { 
        			case 'Feedback': 
						fbfSwitch (1);
						break;
					case 'Suggestion': 
						fbfSwitch (2)
						break;
					case 'Complaint': 
						fbfSwitch (3)
						break;
				}
				return false;
			});
			
        }
    });
     
})(jQuery);