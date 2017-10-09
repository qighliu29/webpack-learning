<template>
    <div class="container">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">
                    <a href="http://www.baidu.com">
                        <img src="https://i.imgur.com/VXVq5xc.png" class="img-responsive">
                    </a>
                </h3>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-9 col-sm-12">
                <h1 class="categories-title">categories</h1>
                <ul class="categories">
                    <li class="row clearfix">
                        <div class="col-xs-12 col-sm-9 col-md-7 content">
                            <div class="icon pull-left" style="background-color: #fda34b; color: #fff;">
                                <i class="fa fa-fw fa-bullhorn"></i>
                            </div>
                            <h2 class="title">
                                <a href="/category/announcements">Announcements</a>
                                <br>
                                <div class="description">Announcements regarding our community</div>
                            </h2>
                        </div>
                        <div class="hidden-xs hidden-sm col-md-1 stats">
                            <span>7</span>
                            <br>
                            <small>Topics</small>
                        </div>
                        <div class="hidden-xs hidden-sm col-md-1 stats">
                            <span>52</span>
                            <br>
                            <small>Posts</small>
                        </div>
                        <div class="hidden-xs col-sm-3 col-md-3 teaser">
                            <div class="card" style="border-color: #fda34b;">
                                <div component>
                                    <p>
                                        <a href="/user/xxx">
                                            <img class="user-img" src="/profile/xxx.png" alt="" data-original-title="xxx">
                                        </a>
                                        <a class="permalink" href="/topic/828/xxx">
                                            <small title="29 Jun 2017, 21:41" datetime="2017-06-29T13:41:03.614Z">29 Jun 2017, 21:41</small>
                                        </a>
                                    </p>
                                    <div class="post-content">
                                        <p>
                                            "We cannot rely on the server used to test automatically the tactics until September, so today we stop testing new tactics."
                                            <br>
                                            <a class="plugin-mentions-a" href="http://forum.mrltactics.com/uid/3">@MrLangvatn</a>
                                            " and I will decide what to do with the new tactics soon, we'll let you know as soon as possible, but probably we will use a slower computer for less time per day ."
                                        </p>
                                        <p>
                                            "In the meantime I will work on the site the whole summer: to add new functionalities, a new (more) automated testing system and a new GUI."
                                        </p>
                                        <p>Stay tuned </p>
                                        <p>Luigi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-lg-3 col-sm-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div id="donations">
                            <p>Please consider donating us if you like our service. The donations will be invested into the site to make it better.</p>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input style="height: 100px;" type="image" src="http://www.mrltactics.com/content/images/2016/11/donateButton.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="alert alert-success ui-draggable-handle">
                    <center>
                        <a href="https://www.instant-gaming.com/en/1642-buy-key-steam-football-manager-2017/?igr=mrltactics">
                            <img src="http://www.mrltactics.com/OFFER.php" alt="Instant-Gaming Offer FM 17" class="img-responsive">
                        </a>
                    </center>
                </div>
                <div class="recent-replies">
                    <ul>
                        <li class="clearfix">
                            <a href="/user/xxx">
                                <img src="/profile/xxx.jpeg" alt="" class="avatar avatar-sm" data-original-title="user">
                            </a>
                            <p>
                                <a href="/tatic/goodbye-4340">
                                    <span class="istactics">
                                        <i class="fa fa-check-square-o"></i>
                                        "TESTED"
                                    </span>
                                    "Goodbye 3430"
                                </a>
                            </p>
                            <span class="pull-right">
                                <span class="timeago" title="5 Oct 2017, 18:02" datetime="5 Oct 2017, 18:02">2 days ago</span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="row forum-stats">
                    <div class="col-xs-6 col-md-3">
                        <div class="stats-vard">
                            <h2>
                                <span class="stats">54</span>
                                <br>
                                <small>Online</small>
                            </h2>
                        </div>
                    </div>
                    <div class="col-xs-6 col-md-3"></div>
                    <div class="col-xs-6 col-md-3"></div>
                    <div class="col-xs-6 col-md-3"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.categories-title {
    text-transform: uppercase;
    color: #777;
    margin: 0 0 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: $line-height-base;
}

.categories {
    list-style-type: none;

    &>li {
        .content {
            .icon {
                font-size: 17px;
                line-height: 17px;
                padding: 13px;
                border-radius: 50%;
                margin-right: 15px;
                min-width: 46px;
                min-height: 46px;
                margin-top: 2px;
            }

            .title {
                display: block;
                word-wrap: break-word;
                overflow: hidden;
                font-size: 18px;
                line-height: 22px;
                margin: 0 0 0 62px;

                .description {
                    font-size: 65%;
                    font-weight: 400;
                    line-height: 1;
                    color: #777;
                    margin-top: 5px;
                }
            }
        }

        .teaser {
            .card {
                border-left: 4px solid #ccc;
                text-align: left;
                margin-top: 2px;
                overflow: hidden;
                height: 53px;
                font-size: 12px;
                line-height: 14px;

                &>* {
                    padding-left: 20px;
                }

                p {
                    margin: 0;
                }

                .user-img {
                    border-radius: 50%;
                    width: 24px;
                    height: 24px;
                }

                a.permalink {
                    color: #777;
                    text-decoration: underline;
                }

                .post-content {
                    overflow: hidden;
                }
            }
        }
    }
}

.plugin-mentions-a {
    color: #31708f;
    font-size: .9em;
    white-space: nowrap;
}

#donations {
    text-align: center;
}

.ui-draggable-handle {
    touch-action: none;
}

.recent-replies {
    overflow: hidden;

    ul {
        width: 100%;
        height: 50px;
        line-height: 16px;
        margin-left: 1px;
        padding: 5px 5px 5px 0;
        list-style-type: none;

        li {
            clear: both;
            line-height: 17px;
            margin-bottom: 20px;

            .avatar {
                display: block;
                float: left;
                margin-right: 8px;

                &.avatar-sm {
                    width: 24px;
                    height: 24px;
                    line-height: 24px;
                    font-size: 1.5rem;
                    border-radius: inherit;
                }
            }

            p {
                display: block;
                font-size: 14px;
                word-break: break-word;
            }

            span {
                font-size: 12px;
                overflow: hidden;
                height: 16px;
            }
        }
    }
}

.avatar,
.user-icon {
    text-align: center;
    color: #eee;
    font-weight: 400;
}

.istactics {
    border: 1px solid #5cb85c;
    color: #5cb85c;
    text-transform: uppercase;
    padding: 2px 5px;
    vertical-align: 12%;
}

.forum-stats {
    .stats-card {
        text-align: center;

        h2 {
            line-height: 25px;
        }
    }
}

.stats {
    font-size: 20px;
    text-align: center;
    margin-top: 7px;
    line-height: 22px;
}
</style>
