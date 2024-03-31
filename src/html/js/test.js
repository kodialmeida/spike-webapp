<style type="text/css"> li {margin}: 0.5em;</style>
<ng-controller ng-controller="AskQuestionController as qc">
  <div ng-show="qc.showForm == false"><p>Sorry for the interruption, but do you have any questions about Spike so
    far?</p>
    <jqx-button jqx-settings="::modal.btnYes" ng-click="qc.showForm = true" style="float:left;margin:0.4em 3.1em;">Yes
    </jqx-button>
    <jqx-button jqx-settings="::modal.btnNo" ng-click="modal.noClick()" style="margin:0.4em 3.1em;">No</jqx-button>
  </div>
  <div ng-show="qc.showForm == true">
    <form action="https://hal-software.com/contact/" id="contactForm" method="post" style="height: 34em"
          target="_blank"><p>Please send us an email and we will reply as soon as possible.</p>
      <ul class="forms" style="list-style:none; font-size:1.5em; padding: 0">
        <li>
          <div style="height: 2.8em; display:block"><label for="contactName"
                                                           style="float:left; margin-right:100%">Name:</label> <input
            type="text" name="contactName" id="contactName" value="" class="txt requiredField"
            style="float:left; width: 50%; margin-right: 100%" ng-model="qc.name" required/>
            <div class="dialog-error-message" ng-if="qc.name === undefined"
                 style="font-size:0.5em; display:block; text-align:right; float:left; margin-left:18.5em">Required....
            </div>
            <div class="dialog-error-message" ng-if="qc.name !== undefined"
                 style="font-size:0.5em; display:block; text-align:right; float:left; ">&nbsp;</div>
          </div>
        </li>
        <li>
          <div style="height: 2.8em; display:block"><label for="email"
                                                           style="float:left; margin-right:100%">Email:</label> <input
            type="text" name="email" id="email" value="" class="txt requiredField email"
            style="float:left; width: 50%; margin-right: 100%" ng-model="qc.email" required/>
            <div class="dialog-error-message" ng-if="qc.email === undefined"
                 style="font-size:0.5em; display:block; text-align:right; float:left; margin-left:18.5em">Required....
            </div>
            <div class="dialog-error-message" ng-if="qc.email !== undefined"
                 style="font-size:0.5em; display:block; text-align:right; float:left; ">&nbsp;</div>
          </div>
        </li>
        <li class="textarea" style="height: 9em">
          <div style="width:100%; float:left; display:block"><label for="moreCommentsText"
                                                                    style="float:left; margin-right:100%">Questions/Comments:</label>
            <textarea name="moreComments" id="moreCommentsText" rows="14" class="requiredField"
                      style="resize:none; float:left; width: 100%; height: 10em; margin-right: 100%"
                      ng-model="qc.add_comm"></textarea>
            <div class="dialog-error-message" ng-if="qc.add_comm === \'\'"
                 style="font-size:0.5em; display:block; text-align:right; float:left; margin-left:44em">Required....
            </div>
            <div class="dialog-error-message" ng-if="qc.add_comm !== \'\'"
                 style="font-size:0.5em; display:block; text-align:right; float:left; ">&nbsp;</div>
          </div>
        </li>
        <li class="textarea" style="display: none"><label for="commentsText">Additional Comments (optional) - DONT
          SHOW!</label> <textarea name="comments" id="commentsText" class="requiredField">{{qc:add_comm}}</textarea>
        </li>
        <li style="display: none"><label for="mathCheck">Solve: 3 + 6</label> <input type="text" name="mathCheck"
                                                                                     id="mathCheck" value="9"
                                                                                     class="txt requiredField math"
                                                                                     style="float:right"/></li>
        <li class="inline"><input type="checkbox" name="sendCopy" id="sendCopy" value="true"/> <label for="sendCopy">Send
          a copy of this email to yourself</label></li>
        <li hidden class="screenReader"><label for="checking" class="screenReader">If you want to submit this form, do
          not enter anything in this field</label> <input type="text" name="checking" id="checking" class="screenReader"
                                                          value=""/></li>
      </ul>
      <input type="hidden" name="submitted" id="submitted" value="true"/>
      <jqx-button jqx-settings="::modal.btnYes" class="submit button" ng-click="qc.showForm = null"
                  ng-disabled="!(qc.name && qc.email && qc.add_comm)" type="submit"
                  style="float:left;margin:0.4em 3.1em;">Send
      </jqx-button>
      <jqx-button jqx-settings="::modal.btnNo" ng-click="modal.noClick()" style="margin:0.4em 3.1em;">Cancel
      </jqx-button>
    </form>
  </div>
  <div ng-show="qc.showForm == null"><p>Thank you for your email. We will respond as soon as possible.</p>
    <jqx-button jqx-settings="::modal.btnYes" ng-click="modal.noClick()" style="margin:0.4em 3.1em;">OK</jqx-button>
  </div>
</ng-controller>

