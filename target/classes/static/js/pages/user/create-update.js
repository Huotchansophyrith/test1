$(document).ready(function () {

   const userApiUrl = "/api/v1/users";
   let data = {};

   const $fullName = $("input[name='fullName']");
   const $username = $("input[name='username']");
   const $pwd = $("input[name='pwd']");
   const $confPwd = $("input[name='confPwd']");

    function validateAndAssignData() {

        let isValidate = validateInputField(
           [
               $username,
               $pwd,
               $confPwd
           ]
       );

       if (!isValidate) return false;

       if ($pwd.val() !== $confPwd.val()) {
           toastAlertInfo("Password not match");
           $confPwd.focus();
           return false;
       }

        data = {
           "fullName": $fullName.val(),
           "username": $username.val(),
           "password": $pwd.val()
           // "status": true
       };
       return true;
   }

    $('#create').on('click',function() {
        // alert("asd")
        if(validateAndAssignData()){
            // console.log(data);
            saveUser();
        }

    });

    $('#update').on('click',function() {
        validateAndAssignData();
        data['id'] = userId;
        updateUser();
    });

   function saveUser() {
       postRequest(userApiUrl, data, dataRes => {
           if (dataRes.status === 200 && dataRes.responseJSON.statusCode === 200) {
               toastAlertSuccessBigNoBtn("User Created").then(() => $(location).attr('href', "/users"))
           } else {
               toastAlertInfo(dataRes.responseJSON.message);
           }
       })
   }

   function updateUser() {
       putRequest(userApiUrl, data, dataRes => {
           if (dataRes.status === 200 && dataRes.responseJSON.statusCode === 200) {
               toastAlertSuccessBigNoBtn("User Updated").then(() => $(location).attr('href', "/users"))
           } else {
               toastAlertInfo(dataRes.responseJSON.message);
           }
       })
   }

});
