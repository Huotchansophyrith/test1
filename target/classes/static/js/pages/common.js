

$(function () {
    /* Select 2 */
    $('select').each(function () {
        $(this).select2({
            theme: 'bootstrap4',
            placeholder: {
                id: '',
                text: $(this).data('placeholder')
            },
            allowClear: Boolean($(this).data('allow-clear')),
            closeOnSelect: !$(this).attr('multiple'),
        });
    });

});

// Refresh every 30 Minutes if no activity
(function(minute) {
    let refresh,
        intvrefresh = function() {
            clearInterval(refresh);
            refresh = setTimeout(function() {
                location.href = location.href = "/logout";
            }, minute * 60000);
        };
    $(document).on('keypress click', function() { intvrefresh() });
    intvrefresh();
}(30)); // define here seconds


/* JS GET Cookie Value By Name*/
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

/* Ajax GET Request*/
function getRequest(url, callback) {
    $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        complete: function (dataRes) {
            callback(dataRes);
        }
    });
}

/* Ajax JSON Form Data POST Request*/
function formDataPostRequest(url, formData, callback, isAsync) {
    $.ajax({
        url: url,
        data: formData,
        processData: false,
        contentType: false,
        type: 'POST',
        async: typeof isAsync === "boolean" ? isAsync : true,
        complete: function (dataRes) {
            // loadingStop();
            callback(dataRes);
        },
        beforeSend: function () {
            // loadingStart();
        }
    });
}

/* Ajax JSON POST Request*/
function postRequest(url, data, callback) {
    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(data && "" === data ? {} : data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        complete: function (dataRes) {
            callback(dataRes);
        }
    });
}

/* Ajax JSON PUT Request*/
function putRequest(url, data, callback) {
    $.ajax({
        type: "PUT",
        url: url,
        data: JSON.stringify(data && "" === data ? {} : data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        complete: function (dataRes) {
            callback(dataRes);
        }
    });
}

/* Ajax JSON DELETE Request*/
function deleteRequest(url, callback) {
    $.ajax({
        type: "DELETE",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        complete: function (dataRes) {
            callback(dataRes);
        }
    });
}

/* Validate input fields */
function validateInputField(fieldElements) {
    for (let i = 0; i < fieldElements.length; i++) {
        let field = fieldElements[i];
        const fieldVal = field.val() === undefined ? '' : field.val().trim();
        if (fieldVal.toString() === "") {
            field.focus();
            const inputName = field.attr("name");
            // toastAlertInfo("Invalid input " + (inputName ? inputName : ''));
            Swal.fire({
                position: 'center',
                // position: 'top-end',
                icon: 'info',
                title: "Invalid input " + (inputName ? inputName : ''),
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        }
    }
    return true;
}

/* Initialize Toast SweetAlert2 */
const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: true
});


/* Alert confirm*/
function toastAlertConfirm(title, text, icon,
                           showCancelButton = true,
                           confirmButtonText = "YES",
                           confirmButtonColor) {
    return Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: confirmButtonText,
        showCancelButton: showCancelButton,
        confirmButtonColor: confirmButtonColor
    })
}

/* Success alert */
function toastAlertSuccess(msg) {
    return Toast.fire({
        position: 'center',
        icon: 'success',
        title: msg,
    })
}

function toastAlertSuccessBig(msg){
    return Swal.fire({
        position: 'center',
        icon: 'success',
        title: msg,
        showConfirmButton: true
    })
}

function toastAlertSuccessBigNoBtn(msg){
    return Swal.fire({
        position: 'center',
        icon: 'success',
        title: msg,
        showConfirmButton: false,
        timer: 1500
    })
}

/* Info alert */
function toastAlertInfo(msg) {
    //// Small alert
    // return Toast.fire({
    //     icon: 'info',
    //     title: '&nbsp;' + msg + '!'
    // });

    //// Big alert
    return Swal.fire({
        position: 'center',
        // position: 'top-end',
        icon: 'info',
        title: '&nbsp;' + msg,
        showConfirmButton: true
    });
}
/* Error alert */
function toastAlertError(msg) {
    return Toast.fire({
        position: 'center',
        icon: 'error',
        title: '&nbsp;' + msg,
        showConfirmButton: true
    });
}


function formatDate(date) {
    let cnvDate = new Date(date);
    let y = cnvDate.getFullYear();
    let m = cnvDate.getMonth() + 1;
    let d = cnvDate.getDate();
    //let t = date.toLocaleTimeString();
    return (y + "-" + (m > 10 ? m : "0" + m) + "-" + (d > 10 ? d : "0"+ d));
}