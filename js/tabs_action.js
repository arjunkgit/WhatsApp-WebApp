        function openTab(evt, tabName) {
            var i, x, tablinks;
            x = document.getElementsByClassName("tab_hide");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablink");
            for (i = 0; i < x.length; i++) {
                tablinks[i].className = tablinks[i].className.replace("w_select", "w_back");
            }
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " w_select";
            document.getElementByClassName("tablink").style.color = "blue";
        }