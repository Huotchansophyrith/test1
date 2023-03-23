$(document).ready(function () {

    const baseUrl = "/api/v1/users";
    //var autoIncrNum;
    const UserTable = $('#data-table').DataTable({
        order: [[ 0, "asc" ]],
        responsive: true,
        "ajax" : {
            "url": baseUrl,
            "type": "GET",
            "dataSrc": function (d) {
                //autoIncrNum = d.data.length;
                return d.data;
            }
        },

        "columnDefs": [
            {"className": "dt-center", "targets": "_all"}
        ],
        "columns": [
            {"data": "id"},
            // {"data":"userNo"},
            {"data":"fullName"},
            {"data":"username"},
            // {"data":"userRoles.name"},
            {"data": null, "width": "5%"}
        ],

        "createdRow": function (row, data) {
            const $cell = $(row).find("td");
            const id = data.id;
            const name = data.username;
            const link = "<div class='ellipsis'><a class='link' href='/users/update/" + id + "' data-btn='link' title='" + id + "'>" + name + "</a></div>";
            const btnDelete = "<button type='button' class='btn btn-xs btn-danger' data-btn='delete' data-seq='" + id + "' title='Delete'>Delete</button>";

            //$cell.eq(0).html(autoIncrNum--);
            $cell.eq(2).html(link);
            $cell.eq(3).html(btnDelete);
        }
    });

    // reload datatable
    function reLoadTable() {
        UserTable.ajax.reload();
    }

    let deleteUserId = "";
    $(document).on("click", "[data-btn='delete']", function () {
        deleteUserId = $(this).attr("data-seq");
        toastAlertConfirm(
            'Delete',
            'Do you want to delete this user?',
            'warning',
            true,
            "Delete",
            "#dc3545")
            .then(result => {
                if (result.value) {
                    deleteRequest("api/v1/users/delete/" + deleteUserId, response => {
                        if (response.status === 200) {
                            toastAlertSuccessBigNoBtn("User deleted!").then(()=>reLoadTable())
                        } else {
                            toastAlertError(response.responseJSON.message)
                        }
                        $(this).prop("disabled", false);
                    });
                }
            })
    });

});
