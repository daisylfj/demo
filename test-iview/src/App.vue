

<template>
    <div class="layout">
      <Layout>
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
            <MenuItem name="1-1">
                <Icon type="ios-navigate"></Icon>
                <span>Option 1</span>
            </MenuItem>
            <MenuItem name="1-2">
                <Icon type="search"></Icon>
                <span>Option 2</span>
            </MenuItem>
            <MenuItem name="1-3">
                <Icon type="settings"></Icon>
                <span>Option 3</span>
            </MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <Header :style="{padding: 0}">   
            <Menu mode="horizontal" >
              <div class="layout-logo">
                <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
                       Commercial EXCELLENCE
              </div>
            
              <div class="layout-nav">
              <router-link to="/HOME">
                <MenuItem name="1">
                HOME
                </MenuItem>
              </router-link>
              <router-link to="/ACT"> 
                <MenuItem name="2">
                  ACT
                </MenuItem>
              </router-link>
              <router-link to="/1-1"> 
                <MenuItem name="3">
                  DISCOVER
                </MenuItem>
              </router-link>
              <router-link to="/FAQ"> 
                <MenuItem name="4">
                  FAQ
                </MenuItem>
              </router-link>
              
                <div v-if="loginStatus === true">Hello,{{userFullname}}</div>
                <Button v-if="loginStatus === false" @click="signin">sign in</Button>
              </div>
          </Menu>
        </Header>

        <Content :style="{background: '#fff'}">
            <router-view></router-view>
        </Content>

       
        </Layout>
      </Layout>
    </div>
</template>


<script>
    export default {
      props:['active-name'],
        data () {
            return {
                isCollapsed: false,
                userFullname: '',
                loginStatus: false,
                userDomain: ''
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            signin:function(){
              let option={
                prompt: 'select_account',
              }
              gapi.auth2.getAuthInstance().signIn(option).then((r)=>{
                this.refresh()
              })
            },

            refresh:function(){
              this.$getGapiClient()
                .then(gapi =>{
                  this.loginStatus = gapi.auth2.getAuthInstance().isSignedIn.get()
                  this.userDomain = gapi.auth2.getAuthInstance().currentUser.get().getHostedDomain()
                  this.currentUserKey = gapi.auth2.getAuthInstance().currentUser.get().getId()
                  if (this.loginStatus === true && this.userDomain==="nielsen.com"){
                    gapi.client.directory.users.get({
                      'userKey': this.currentUserKey,
                      'viewType': 'domain_public',
                      'projection': 'full'
                    }).then((response)=> {
                      console.log(response)
                      this.userFullname = response.result.name.fullName
                    })
                  }
                })
            }
        },
        mounted () {
          console.log(this.loginStatus);
          this.refresh();
        }
    }
</script>
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height:100%;
    }
    
    .layout-logo{
    width: 400px;
    height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    margin-left: 5%;
}
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .ivu-layout {
        height: 100%;
    }
    .layout-nav{
        width: 450px;
        margin: 0 auto;
        margin-right: 10%;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>