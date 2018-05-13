

        var select = document.getElementsByTagName("select");
        var school = document.getElementById("school");
        school.onclick = function () {
            var school_select = document.getElementById("school-select");
            for (var i = 0; i < select.length; i++) {
                select[i].style.display = "none";
            }
            school_select.style.display = "block";
        }
        var company = document.getElementById("company");
        company.onclick = function () {
            var company = document.getElementById("company-select");
            for (var i = 0; i < select.length; i++) {
                select[i].style.display = "none";
            }
            company.style.display = "block";
        }
