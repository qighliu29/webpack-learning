<template>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="hidden-xs">
                <ul class="nav navbar-nav navbar-right">
                    <wl-menu-item v-for="item in loggedOutMenu" :key="item.label" v-bind="item"></wl-menu-item>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <form id="search-form" class="navbar-form navbar-right hidden-xs">
                            <button id="search-button" class="btn btn-link" @click.prevent="toggleSearchField()">
                                <i class="fa fa-search fa-w"></i>
                            </button>
                            <div class="form-group" :class="{'active': showSearchField}">
                                <input type="text" class="form-control" placeholder="Search">
                                <a href="#">
                                    <i class="fa fa-gears fa-fw advanced-search-link"></i>
                                </a>
                            </div>
                        </form>
                    </li>
                </ul>
                <ul class="nav navbar-nav">
                    <wl-menu-item v-for="item in mainMenu" :key="item.icon" v-bind="item"></wl-menu-item>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import WlMenuItem from './MenuItem.vue';

export default {
    data: () => ({
        loggedOutMenu: [{
            label: 'Register',
            url: 'register',
            icon: 'fa fa-pencil visible-xs-inline'
        }, {
            label: 'Login',
            url: 'login',
            icon: 'fa fa-sign-in visible-xs-inline'
        }],
        mainMenu: [{
            label: 'Home',
            url: '',
            icon: 'fa fa-fw fa-home'
        }, {
            label: '',
            url: '',
            icon: 'fa fa-fw fa-list'
        }, {
            label: '',
            url: '',
            icon: 'fa fa-fw fa-clock-o'
        }, {
            label: '',
            url: '',
            icon: 'fa fa-fw fa-fire'
        }, {
            label: 'Tactics',
            url: '',
            icon: 'fa fa-fw fa-exclamation-circle'
        }, {
            label: '',
            url: '',
            icon: 'fa fa-fw fa-search'
        }],
        showSearchField: false
    }),
    methods: {
        slide() {
            this.$emit('toggleShrink');
        },
        toggleSearchField() {
            this.showSearchField = !this.showSearchField;
        }
    },
    components: {
        WlMenuItem
    }
}
</script>

<style lang="scss" scoped>
#search-form {
    text-align: right;

    #search-button {
        float: right;
    }

    .form-group {
        width: 0px;
        transition: width .2s linear;
        overflow: hidden;
        max-height: 45px;

        &.active {
            width: 204px;
        }

        .advanced-search-link {
            position: relative;
            width: 0;
            left: -30px;
        }
    }
}
</style>

