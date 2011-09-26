(function($){
 
    $.fn.extend({ 
         
        //pass the options variable to the function
        feedbackTab: function(options) {
 
 			//Handy for CSS
			$body = $('body');
			$body.addClass('quickFeedback').append('<div id="feedbackWrapper"><div id="feedbackBox"><ul id="feedbackNav"><li class="live"><a href="#">Feedback</a></li><li><a href="#">Suggestions</a></li><li><a href="#">Complaints</a></li></ul><ul id="feedbackForms"><li class="currentForm"><form><div class="personalDetails"><div><label>Your name:</label><input type="text" title="Your name..." /></div><div><label>Your email:</label><input type="email" title="Your email..." /></div></div><label>Feedback</label><textarea title="Feedback goes here..."></textarea><button>Submit</button></form></li><li><form><div class="personalDetails"><div><label>Your name:</label><input type="text" title="Your name..." /></div><div><label>Your email:</label><input type="email" title="Your email..." /></div></div><label>Suggestions</label><textarea title="Suggestions go here..."></textarea><button>Submit</button></form></li><li><form><div class="personalDetails"><div><label>Your name:</label><input type="text" title="Your name..." /></div><div><label>Your email:</label><input type="email" title="Your email..." /></div></div><label>Complaints</label><textarea title="Complaints go here..."></textarea><button>Submit</button></form></li></ul></div></div>').append('<a href="#" id="feedbackTab">Feedback</a>');

            //Set the default values, use comma to separate the settings, example:
            var defaults = {
				feedback: true,
				complaint: false,
				suggestion: false,
				feedbackHead: 'Feedback',
				complaintHead: 'Complaint',
				suggestionHead: 'Suggestion',
				feedbackText: 'Give us some feedback about the website.',
				complaintText: 'Let us know if you\'re unhappy about something we\'ve done',
				suggestionText: 'Got a suggestion? Let us know about it.',
				feedbackFieldName: 'feedback',
				complaintFieldName: 'feedback',
				suggestionFieldName: 'feedback',
				feedbackAction: false,
				complaintAction: false,
				suggestionAction: false
            }
                 
            var options =  $.extend(defaults, options);
 			var o = options;
			
 			$feedbackTab = $('#feedbackTab');
			$feedbackWrapper = $('#feedbackWrapper');
			$feedbackBox = $('#feedbackBox');

			// Fading in and out when you click the tab
			$feedbackTab.live("click", function() {
				$this = $(this);
				$feedbackWrapper.fadeIn();
				$this.fadeOut();
				return false;
			});
			
			$feedbackWrapper.live("click", function() {
				$this = $(this);
				$feedbackTab.fadeIn();
				$this.fadeOut();
				return false;
			});
			
			$feedbackBox.live("click", function() {
				return false;
			});
			
			// Add the title text in the field
			var toggleFields = $('input[type="text"], input[type="email"], textarea');
			
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
			$fbtlnk  = $('a', '#feedbackNav');
			
			$feedbackForms = $('#feedbackForms');
			$currentForm = $('.currentForm');
			
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
				
				switch ($thisText) { 
        			case 'Feedback': 
						fbfSwitch (1)
						break;
					case 'Suggestions': 
						fbfSwitch (2)
						break;
					case 'Complaints': 
						fbfSwitch (3)
						break;
				}
				return false;
			});
			
        }
    });
     
})(jQuery);