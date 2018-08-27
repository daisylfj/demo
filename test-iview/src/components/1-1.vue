<template>
  <div class="hello">
    <Content :style="{padding: '5px 16px 16px'}">
        <Breadcrumb class="page-header" :style="{margin: '30px 8.5%'}">
            <BreadcrumbItem class="fontsize">
                <Icon type="search"></Icon>  DISCOVER
            </BreadcrumbItem> 
        </Breadcrumb>
        <Breadcrumb class="fontsize-b" :style="{margin: '30px 8.5%'}">
            <BreadcrumbItem to="/">
                 HOME 
            </BreadcrumbItem> 
            <BreadcrumbItem >
                 DISCOVER
            </BreadcrumbItem> 
        </Breadcrumb>


        <Tabs type="card" :style="{margin: '0px 8.5%'}">
            <TabPane label="Tracking Progress">
                <Form class="fsize">
                <FormItem >
                <Row>
                    <Col :xs="{ span: 5}" >
                        <p style="font-size: 15px">LIST OUT ALL MY REQUESTS</p>
                    </Col>
                    <Col :xs="{ span: 5, offset: 7 }" >
                        <p style="font-size: 15px">SEARCH BY KEYWORD</p>
                    </Col>
                </Row>
                <Row>
                    <Col :xs="{ span: 9}" >
                        <p style="font-size: 15px">Track status on billing requests you have raised <Button type="ghost" >My Form</Button></p>
                    </Col>
                    
                    <Col :xs="{ span: 8, offset: 3 }" >
                        <Select :value="getFilterResult" @on-change="changeResult" clearable placeholder="Please selset from dropdown list" style="margin-left: 20px,width: 300px">
                        <Option v-for="item in cityList" :value="item.value":key="item.value" >{{item.label}}</Option>
                        </Select>
                    </Col>
                </Row>
                </FormItem>
                </Form>
            </TabPane>
            <TabPane label="BCC Dashboard">标签二的内容</TabPane>
        </Tabs>
        

        <Row>
        <div class="page-footer" :style="{margin: '30px 8.5%'}">
            Copyright © 2018 The Nielsen Company (US), LLC. All rights reserved. Confidential and Proprietary
        </div>
    </Row>
    </Content>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
    export default {
        name:'1-1',
        data () {
            return {
                
            }
        },
        methods: {
            ...mapActions(
                ['changeResult']
                ),
            filterMethod (value, option) {
                return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
            },
            turnTOactchildren () {
                this.$router.push({path: '/1-2'}) // 路由跳转到B
            }

        },
        computed: {
            ...mapState( // 语法糖
              ['getFilterResult'] // 相当于this.$store.dispatch('modifyName'),提交这个方法
            ),
            projectlist() {
                return this.$store.state.projectlist
            },
            cityList() {
                return this.$store.state.cityList
            }
        }
    }
</script>

<style scoped>

.fontsize{
  text-align: center;
  font-size: 20px;
  
}

.fontsize-b{
  font-size: 15px;
  background-color: #F2F2F2;
 border-radius: 3px;
 padding: 3.5px;
}
.background-s{
  background-color: #F2F2F2;
 border-radius: 3px;
}
.page-header {
    padding-bottom: 9px;
    margin: 40px 0 0px;
    border-bottom: 1.5px solid #eee;
}

.page-footer {
    border-top-style: dotted;
    border-top-color: #eee;
    border-top-width: 1.5px;
    padding-top: 20px;
    text-align: center;    
}

.fsize{
    min-height: 276px;
}
</style>