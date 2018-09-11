define(['react', 'Wix'], function (React, Wix) {
    return React.createClass({
        getInitialState: () => {
            return {
                title_text: "Latest",
                posts: [],
                postIndex: 0,
                postToShow: 5,
                animationDuration: 3000,
                isLoading: true,
                db: {},
                tickerStarted: false,
                settingsToSave: {}
            }
        },
        componentDidMount: function () {
            Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, (data) => this.onSettingsUpdate(data));
            Wix.addEventListener(Wix.Events.SITE_PUBLISHED, (data) => this.onSitePublished(data));
            Wix.addEventListener(Wix.Events.SITE_SAVED, (data) => this.onSiteSaved(data));

            var queryParams = simpleQueryString.parse(location.search);
            if (queryParams.viewMode == "editor") {
                this.loadFirebaseData("savedSettings");    
            } else {
                this.loadFirebaseData("settings");
            }            
        },
        loadFirebaseData: function (collection) {
            var config = {
                apiKey: "AIzaSyCrEcfR6yAPz2mm_EK5_dg5auPTdsuK5Lo",
                authDomain: "wix-test-billy.firebaseapp.com",
                databaseURL: "https://wix-test-billy.firebaseio.com",
                projectId: "wix-test-billy",
                storageBucket: "wix-test-billy.appspot.com",
                messagingSenderId: "118952255688"
            };
            firebase.initializeApp(config);
            this.state.db = firebase.firestore();
            this.state.db.settings({ timestampsInSnapshots: true });

            var app_id = Wix.Utils.getInstanceId();

            this.state.db.collection(collection).doc(app_id).get()
            .then((snapshot) => {
                if (snapshot.data()) {
                    $.each(snapshot.data(),(DBKey, DBValue) => {
                        if (DBKey == "feed_url") {
                            this.loadFeed(DBValue);            
                        } else {
                            this.onSettingsUpdate({key: DBKey, value: DBValue});        
                        }    
                    });
                } else {
                    /* No settings stored */   
                }
            });
        },
        onSettingsUpdate: function (update) {
            console.log(update);
            
            if (update.key == "title_text") {
                this.setState({
                    title_text: update.value
                });
            };

            if (update.key == "feed_url") {
                this.setState({
                    feed_url: update.value
                });
                this.loadFeed(update.value);
            }; 

            if (update.key) {
                this.state.settingsToSave[update.key] = update.value;    
            } 
            
            console.log("settingsToSave: " + this.state.settingsToSave);
        },
        loadFeed: function(feed) {
            $.get(feed, (response) => {
                var newPosts = []
                response = $(response).find('item').splice(0,this.state.postToShow);
                $(response).each((i,post) => {
                    newPosts.push({ 
                    title: $(post).find('title').text(),
                    link: $(post).find('link').text(),
                    pubDate: new Date($(post).find('pubDate').text()).toDateString()
                    })
                });              
                if (!this.state.tickerStarted) {
                    this.startTicker()
                };
                this.setState({ posts: newPosts, isLoading: false });
            });
        },
        startTicker: function() {
            setInterval(() => { 
                $(".news-headline").each((i,post) => {
                    if (this.state.postIndex == i) {
                        $(post).fadeIn(1000);
                    } else {
                        $(post).fadeOut(500);    
                    } 
                });

                (this.state.postIndex+1) >= this.state.postToShow ? this.state.postIndex = 0 : this.state.postIndex++
                
            }, this.state.animationDuration);
        },
        onSitePublished: function() {
            var app_id = Wix.Utils.getInstanceId();
            this.state.db.collection('savedSettings').doc(app_id).set(this.state.settingsToSave, {merge:true});
            this.state.db.collection('settings').doc(app_id).set(this.state.settingsToSave, {merge:true});
        },
        onSiteSaved: function() {
            var app_id = Wix.Utils.getInstanceId();
            this.state.db.collection('savedSettings').doc(app_id).set(this.state.settingsToSave, {merge:true});
        },
        render: function () {
          var content;
          if (this.state.isLoading) {
            content =  <div className="news-headline"> Loading... </div>;
          } else {
            var posts = this.state.posts.map(function(post,i){
                return (
                    <div className="news-headline" style={{display:i != 0 ? "none" : "initial"}}> {post.title} <span className="news-time">({post.pubDate})</span></div>
                );
            });
            content = posts;
          }
            return (
                <div>
                    <div className="news-ticker"> 
                        <div className="news-type">
                            <span className="news-type-text"> {this.state.title_text}</span>
                        </div>
                        {content}
                        <div className="news-bg"></div>
                    </div>
                </div>
            )
        }
    });
});
