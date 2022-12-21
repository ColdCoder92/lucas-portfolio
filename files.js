$(function() {
    let maxFileIndex = 0;
    let fileLabels = [];
    let fileUploads = [];

    fileManipulation();
    // Adds the ability for users to add or remove files to upload
    function fileManipulation() {
        $("#add-files").on("click", function() {
            addFileOption();
        });
        $(".remove-files").eq(0).on("click", function() {
            removeFileOption(0);
        })
    }
    /* Every time the user adds a file, the file upload button and label 
       becomes cloned */
    function addFileOption() {
        maxFileIndex++;
        fileLabels[maxFileIndex] = $("<label class=\"form-label\">Upload Files</label>");
        fileUploads[maxFileIndex] = $("<div class=\"row\"><input class=\"form-control fileInput\" type=\"file\"><button class=\"btn btn-danger remove-files\">Remove File</button></div>");
        let name = "files" + maxFileIndex;
        fileLabels[maxFileIndex].attr("for", "files" + maxFileIndex);
        fileUploads[maxFileIndex].children().eq(0).attr("id", name);
        fileUploads[maxFileIndex].children().eq(0).attr("name", name);
        fileUploads[maxFileIndex].children().eq(1).on("click", function() {
            removeFileOption(maxFileIndex);
        })
        $("#add-files").before(fileUploads[maxFileIndex]);
        fileUploads[maxFileIndex].before(fileLabels[maxFileIndex]);
        console.log(maxFileIndex);
    }
    /* File Option is removed after clicking on the Remove File button on any 
       index. */
    function removeFileOption(fileIndex) {
        if (maxFileIndex > 0) {
            fileLabels[fileIndex].remove();
            fileUploads[fileIndex].remove();
            maxFileIndex--;
            console.log(maxFileIndex);
        }
    }
});