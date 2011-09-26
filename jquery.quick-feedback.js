(function($){
 
    $.fn.extend({ 
         
        //pass the options variable to the function
        feedbackTab: function(options) {
 
 			//Handy for CSS
			$body = $('body');
			$body.addClass('quickFeedback').append('<div id="feedbackWrapper"><div id="feedbackBox"><ul id="feedbackNav"><li class="live"><a href="#">Feedback</a></li><li><a href="#">Suggestions</a></li><li><a href="#">Complaints</a></li></ul><div class="submit"><form><div class="personalDetails"><div><label>Your name:</label><input type="text" title="Your name..." /></div><div><label>Your email:</label><input type="text" title="Your email..." /></div></div><label>Feedback</label><textarea title="Feedback goes here..."></textarea><button>Submit</button></form></div></div></div>').append('<a href="#" id="feedbackTab">Feedback</a>');

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

			// Fading in and out
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
			
			$fbtlnk  = $('a', '#feedbackNav');
			
			$fbtlnk.live("click", function() {
				$this = $(this);
				$thisText = $this.text();
				
				switch ($thisText) { 
        			case 'Feedback': 
						alert('1');
						break;
					case 'Suggestions': 
						alert('2');
						break;
					case 'Complaints': 
						alert('3');
						break;
				}
				return false;
			});
			
        }
    });
     
})(jQuery);