const initializeSidebarCollapse = () => {
    const sidebarElement = document.getElementsByClassName("js-sidebar")[0];
    const sidebarToggleElement = document.getElementsByClassName("js-sidebar-toggle")[0];

    if (sidebarElement && sidebarToggleElement) {
        sidebarToggleElement.addEventListener("click", () => {
            sidebarElement.classList.toggle("collapsed");

            sidebarElement.addEventListener("transitionend", () => {
                window.dispatchEvent(new Event("resize"));
            });
        });
    }
}

// Wait until page is loaded
document.addEventListener("DOMContentLoaded", () => initializeSidebarCollapse());

$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});