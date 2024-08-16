// Text editor not loaded
setTimeout(() => {
    // After 100ms we assume text editor was loaded
}, 100);

// CodeMirror (bla Grav) Testad 2023
// https://stackoverflow.com/questions/8378678/how-can-i-set-the-value-of-a-codemirror-editor-using-javascript
document.querySelector('.CodeMirror').CodeMirror.setValue('Greger');

// Silverstripe (många steg med textboxar) Testad 2022
// var bodyArea = document.getElementById("Form_EditForm_Content");
bodyArea.value = str;

// TinyMCE Testad 2022 (bla Joomla)
tinymce.activeEditor.execCommand('mceInsertRawHTML', false, str);

// TinyMCE Testad 2023 (bla Joomla)
tinyMCE.execCommand('mceInsertContent', false,'<span >' + text + '<span>');

// Generate Raw HTML
text += "<ul>";
for (var i = 0; i < loopsize; i++) {
text += "<li>"+bulletList + "</li>";
}
text += "</ul>";

// Direct texteditor access (Joomla) Tested 2023
document.getElementById("edit-body-0-value").value = text;

// Mediawiki Testad 2022
var textArea = document.getElementById('wpTextbox1');
textArea.value = str;

// Bolt Testad 2022 (Data inlagd med Jquery)
$(".redactor-styles p").html(text);

// Drupal Testad 2022
document.getElementById('edit-body-0-value').value= sentence;

// Text Input variants
document.getElementById("jform_title").value = titel;
