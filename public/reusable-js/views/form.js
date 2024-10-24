// remove blank space on empty form
$(document).on('knack-view-render.form', function (event, view, record) {
    if ($('#' + view.key + ' .kn-form-group .kn-input').length === 0) {
        $('#' + view.key + ' .kn-form-group.columns.kn-form-group-1').hide();
    }
});