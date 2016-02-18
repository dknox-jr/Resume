    function showWork() {
        document.getElementById("show-work-button").classList.add("work-level1");
        document.getElementById("manager1").classList.add("work-level1-visible");
        document.getElementById("framer1").classList.add("work-level1-visible");
        document.getElementById("intern1").classList.add("work-level1-visible");
        document.getElementById("CA1").classList.add("work-level1-visible");
        document.getElementById("facilitator1").classList.add("work-level1-visible");
        document.getElementById("volunteer1").classList.add("work-level1-visible");
        document.getElementById("hide-work-button").classList.add("work-level1-visible");
    }

    function hideWork () {
        document.getElementById("show-work-button").classList.remove("work-level1");
        document.getElementById("manager1").classList.remove("work-level1-visible");
        document.getElementById("framer1").classList.remove("work-level1-visible");
        document.getElementById("intern1").classList.remove("work-level1-visible");
        document.getElementById("CA1").classList.remove("work-level1-visible");
        document.getElementById("facilitator1").classList.remove("work-level1-visible");
        document.getElementById("volunteer1").classList.remove("work-level1-visible");
        document.getElementById("hide-work-button").classList.remove("work-level1-visible");
        hideManager();
        hideFramer();
        hideIntern();
        hideCA();
        hideFacilitator();
        hideVolunteer();
    }

    function showEd () {
        document.getElementById("show-ed-button").classList.add("ed-level1");
        document.getElementById("guild1").classList.add("ed-level1-visible");
        document.getElementById("redlands1").classList.add("ed-level1-visible");
        document.getElementById("redmond1").classList.add("ed-level1-visible");
        document.getElementById("hide-ed-button").classList.add("ed-level1-visible");
    }

    function hideEd () {
        document.getElementById("show-ed-button").classList.remove("ed-level1");
        document.getElementById("guild1").classList.remove("ed-level1-visible");
        document.getElementById("redlands1").classList.remove("ed-level1-visible");
        document.getElementById("redmond1").classList.remove("ed-level1-visible");
        document.getElementById("hide-ed-button").classList.remove("ed-level1-visible");
        hideGuild();
        hideRedlands();
        hideRedmond();
    }

    function showManager () {
        document.getElementById("show-manager-button").classList.add("work-level2");
        document.getElementById("manager2").classList.add("work-level2-visible");
        document.getElementById("hide-manager-button").classList.add("work-level2-visible");
    }

    function hideManager () {
        document.getElementById("show-manager-button").classList.remove("work-level2");
        document.getElementById("manager2").classList.remove("work-level2-visible");
        document.getElementById("hide-manager-button").classList.remove("work-level2-visible");
    }

    function showFramer () {
        document.getElementById("show-framer-button").classList.add("work-level2");
        document.getElementById("framer2").classList.add("work-level2-visible");
        document.getElementById("hide-framer-button").classList.add("work-level2-visible");
    }

    function hideFramer () {
        document.getElementById("show-framer-button").classList.remove("work-level2");
        document.getElementById("framer2").classList.remove("work-level2-visible");
        document.getElementById("hide-framer-button").classList.remove("work-level2-visible");
    }

    function showIntern () {
        document.getElementById("show-intern-button").classList.add("work-level2");
        document.getElementById("intern2").classList.add("work-level2-visible");
        document.getElementById("hide-intern-button").classList.add("work-level2-visible");
    }

    function hideIntern () {
        document.getElementById("show-intern-button").classList.remove("work-level2");
        document.getElementById("intern2").classList.remove("work-level2-visible");
        document.getElementById("hide-intern-button").classList.remove("work-level2-visible");
    }

    function showCA () {
        document.getElementById("show-CA-button").classList.add("work-level2");
        document.getElementById("CA2").classList.add("work-level2-visible");
//        document.getElementById("hide-CA-button").classList.add("work-level2-visible");
    }

    function hideCA () {
        document.getElementById("show-CA-button").classList.remove("work-level2");
        document.getElementById("CA2").classList.remove("work-level2-visible");
//        document.getElementById("hide-CA-button").classList.remove("work-level2-visible");
    }

    function showFacilitator () {
        document.getElementById("show-facilitator-button").classList.add("work-level2");
        document.getElementById("facilitator2").classList.add("work-level2-visible");
//        document.getElementById("hide-CA-button").classList.add("work-level2-visible");
    }

    function hideFacilitator () {
        document.getElementById("show-facilitator-button").classList.remove("work-level2");
        document.getElementById("facilitator2").classList.remove("work-level2-visible");
//        document.getElementById("hide-CA-button").classList.remove("work-level2-visible");
    }

    function showVolunteer () {
        document.getElementById("show-volunteer-button").classList.add("work-level2");
        document.getElementById("volunteer2").classList.add("work-level2-visible");
//        document.getElementById("hide-CA-button").classList.add("work-level2-visible");
    }

    function hideVolunteer () {
        document.getElementById("show-volunteer-button").classList.remove("work-level2");
        document.getElementById("volunteer2").classList.remove("work-level2-visible");
//        document.getElementById("hide-CA-button").classList.remove("work-level2-visible");
    }

    function showGuild () {
        document.getElementById("show-guild-button").classList.add("ed-level2");
        document.getElementById("guild2").classList.add("ed-level2-visible");
        document.getElementById("hide-guild-button").classList.add("ed-level2-visible");
    }

    function hideGuild () {
        document.getElementById("show-guild-button").classList.remove("ed-level2");
        document.getElementById("guild2").classList.remove("ed-level2-visible");
        document.getElementById("hide-guild-button").classList.remove("ed-level2-visible");
    }

    function showRedlands () {
        document.getElementById("show-redlands-button").classList.add("ed-level2");
        document.getElementById("redlands2").classList.add("ed-level2-visible");
        document.getElementById("hide-redlands-button").classList.add("ed-level2-visible");
    }

    function hideRedlands () {
        document.getElementById("show-redlands-button").classList.remove("ed-level2");
        document.getElementById("redlands2").classList.remove("ed-level2-visible");
        document.getElementById("hide-redlands-button").classList.remove("ed-level2-visible");
    }

    function showRedmond () {
        document.getElementById("show-redmond-button").classList.add("ed-level2");
        document.getElementById("redmond2").classList.add("ed-level2-visible");
//        document.getElementById("hide-redmond-button").classList.add("ed-level2-visible");
    }

    function hideRedmond () {
        document.getElementById("show-redmond-button").classList.remove("ed-level2");
        document.getElementById("redmond2").classList.remove("ed-level2-visible");
//        document.getElementById("hide-redmond-button").classList.remove("ed-level2-visible");
    }