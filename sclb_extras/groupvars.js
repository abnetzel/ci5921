/**
 *  SoftChalk LessonBuilder
 *  ================ DO NOT EDIT ================
 */

var groupFinished = new Array();
var currentQPNum = new Array();
var quizGroupSize = new Array();
var firstDisplayed = new Array();
var quizGroupToggle_array = new Array();

function randomizeQp(myArray) {
var i = myArray.length;
  while ( --i ) {
    var j = Math.floor(Math.random() * (i + 1));
    var tempi = myArray[i];
    var tempj = myArray[j];
    myArray[i] = tempj;
    myArray[j] = tempi;
  }
}


groupFinished[2] = false;
firstDisplayed[2] = false;
currentQPNum[2] = 1;
var groupQpArray2 = new Array();
var groupQpStateArray2 = new Array();
var qpNumbersArray2 = new Array();
qpNumbersArray2[0] = 1;
qpNumbersArray2[1] = 2;
qpNumbersArray2[2] = 3;
quizGroupSize[2] = 3;
groupQpArray2[1]='<span id="qpspacercheck3"></span><!-- qpstart --><div id="quizpopper3" class="expand"><div class="qpqvalue" style="padding: 5px 10px;">Value: 1</div><div class="qpq" style="border:1px solid #8a758a; background:#eeeeee; line-height:1.5em; padding:10px 15px; width:430px;"><form name="f3"><p style="display:inline;">YouTube&#39;s automatic captioning feature produces captions that are 100% accurate.</p><div style="margin: 1em 15px;"><input type="radio" name="q3" value="true" id="q3a">&nbsp;<label for="q3a"><p style="display:inline;">True</p></label><br /><input type="radio" name="q3" value="false" id="q3b">&nbsp;<label for="q3b"><p style="display:inline;">False</p></label><br /></div><div style="text-align:center;"></div></form><div class="collapse" id="f_done3" style="margin: 1em;"></div><div class="collapse qpqfeedback" id="feed3" style="font-family: Comic Sans MS; border-top: 1px solid #8a758a; margin: 1em;"></div></div></div><!-- qpend -->';
groupQpArray2[2]='<span id="qpspacercheck4"></span><!-- qpstart --><div id="quizpopper4" class="expand"><div class="qpqvalue" style="padding: 5px 10px;">Value: 1</div><div class="qpq" style="border:1px solid #8a758a; background:#eeeeee; line-height:1.5em; padding:10px 15px; width:430px;"><form name="f4"><p style="display:inline;">Put the items in the correct order.</p><div class="hideqpstuff">Below is a sequence of events. Place them in the order they should occur, number 1 being the first item. Select the step number from the drop down next to each item.</div><div style="margin: 1em 15px;"><div class="hideqpstuff">Items to order:<br /><p>1.&nbsp;Watch the video to make revisions and edits so that you can then save the transcript.</p><br /><p>2.&nbsp;Play the video to become familiar with it. Make note of changes in speaker, the presence of music, and sound effects.</p><br /><p>3.&nbsp;Transcribe the video.</p><br /></div><table style="width: 99%; line-height: 1.2em; border: 0"><tr><td style="padding: 3px; border: 0; vertical-align: top"><label for="q4_1"><p style="display:inline;">Watch the video to make revisions and edits so that you can then save the transcript.</p></label></td><td style="width: 1%; padding: 3px; border: 0; vertical-align: top"><select name="q4_1" id="q4_1"><option>1&nbsp;</option><option>2&nbsp;</option><option>3&nbsp;</option></select></td></tr><tr><td style="padding: 3px; border: 0; vertical-align: top"><label for="q4_2"><p style="display:inline;">Play the video to become familiar with it. Make note of changes in speaker, the presence of music, and sound effects.</p></label></td><td style="width: 1%; padding: 3px; border: 0; vertical-align: top"><select name="q4_2" id="q4_2"><option>1&nbsp;</option><option>2&nbsp;</option><option>3&nbsp;</option></select></td></tr><tr><td style="padding: 3px; border: 0; vertical-align: top"><label for="q4_3"><p style="display:inline;">Transcribe the video.</p></label></td><td style="width: 1%; padding: 3px; border: 0; vertical-align: top"><select name="q4_3" id="q4_3"><option>1&nbsp;</option><option>2&nbsp;</option><option>3&nbsp;</option></select></td></tr></table></div><div style="text-align:center;"></div></form><div class="collapse" id="f_done4" style="margin: 1em;"></div><div class="collapse qpqfeedback" id="feed4" style="font-family: Comic Sans MS; border-top: 1px solid #8a758a; margin: 1em;"></div></div></div><!-- qpend -->';
groupQpArray2[3]='<span id="qpspacercheck5"></span><!-- qpstart --><div id="quizpopper5" class="expand"><div class="qpqvalue" style="padding: 5px 10px;">Value: 1</div><div class="qpq" style="border:1px solid #8a758a; background:#eeeeee; line-height:1.5em; padding:10px 15px; width:430px;"><form name="f5"><p style="display:inline;">YouTube pauses the video when you type in the Transcription Editor.</p><div style="margin: 1em 15px;"><input type="radio" name="q5" value="true" id="q5a">&nbsp;<label for="q5a"><p style="display:inline;">True</p></label><br /><input type="radio" name="q5" value="false" id="q5b">&nbsp;<label for="q5b"><p style="display:inline;">False</p></label><br /></div><div style="text-align:center;"></div></form><div class="collapse" id="f_done5" style="margin: 1em;"></div><div class="collapse qpqfeedback" id="feed5" style="font-family: Comic Sans MS; border-top: 1px solid #8a758a; margin: 1em;"></div></div></div><!-- qpend -->';

