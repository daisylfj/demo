<template>
  <div class="hello">
    <Content :style="{padding: '5px 16px 16px'}">
        <Breadcrumb class="page-header" :style="{margin: '30px 8.5%'}">
            <BreadcrumbItem class="fontsize">
                <Icon type="document-text"></Icon>  ACT
            </BreadcrumbItem> 
        </Breadcrumb>
        <Breadcrumb class="fontsize-b" :style="{margin: '30px 8.5%'}">
            <BreadcrumbItem to="/">
                 HOME 
            </BreadcrumbItem> 
            <BreadcrumbItem >
                 ACT
            </BreadcrumbItem> 
        </Breadcrumb>
        <br>
        <Form class="fsize">
            <FormItem style="{margin: '30px'}">
            <Row>
                <Col :xs="{ span: 5, offset: 2}" >
                    <p style="font-size: 15px">Specify Project Type</p>
                </Col>
                <Col :xs="{ span: 6, offset: 0 }" >
                    <Select :value="getFilterResult" @on-change="changeResult" clearable placeholder="Please selset from dropdown list" style="margin-left: 20px,width: 300px">
                    <Option v-for="item in cityList" :value="item.value":key="item.value" >{{item.label}}</Option>
                    </Select>
                </Col>
            </Row>
            </FormItem>
            <FormItem v-if="getFilterResult!=='' ">
            <Row>
                <Col :xs="{ span: 5, offset: 2}" >
                    <p style="font-size: 15px">Project Code</p>
                </Col>
                <Col :xs="{ span: 6, offset: 0 }" >
                    <AutoComplete :value="projectNum" :data="autoCompleteData" @on-select="mySelect" @on-change="autoCompleteOnChange" placeholder="Please input project code then click 'SEARCH'">
                    </AutoComplete>
                </Col>
                <Col :xs="{ span: 3, offset: 1 }" >
                        <Button class="bton" @click="turnTOactchildren" icon="search"> SEARCH</Button>
                </Col>
            </Row>
            <br>
            <Row ><Col :xs="{offset: 7}">Project Code must follow the naming rules listed below：</Col></Col></Row>
            <Row><Col :xs="{offset: 7}">* CI/NU: Proposal Code in Protrack: eg. CNLP161122</Col></Row>
            <Row><Col :xs="{offset: 7}">* Innovation: WB Study ID in SF: eg. 104439</Col></Row>
            <Row><Col :xs="{offset: 7}">* SFA: R + year + last 6 digits of contract# in SF: eg. 2017-06-150359 -> R17-150359</Col></Row>
            <Row><Col :xs="{offset: 7}">* AAC: A + year + last 6 digits of contract# in SF: eg. 2017-06-150689 -> A17-150689</Col></Row>
            <Row><Col :xs="{offset: 7}">* Neuro: N + year + last 6 digits of contract# in SF: eg. 2017-04-148388 -> N17-148388</Col></Row>
            <Row><Col :xs="{offset: 7}">* Other ME: M + year + last 6 digits of contract# in SF: eg. 2017-05-149419 ->M17-149419</Col></Row>
            <Row><Col :xs="{offset: 7}">* Sports: SP + year + last 6 digits of contract# in SF: eg. 2017-06-151368 ->SP17-151368
            </Col></Row>
            </FormItem>
        </Form>

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
        name:'ACT',
        data :function () {
          return {
            autoCompleteData: []
          }
        },
        methods: {
            ...mapActions(
                ['changeResult','setProjectNum']
                ),
            turnTOactchildren () {
                this.$router.push({path: '/ACT-sub'}) // 路由跳转到B
            },
            mySelect: function(value) {
              return value
            },

            autoCompleteOnChange:function(value) {
                 if (value) {
                     let tempList = []
                     this.projectList && this.projectList.forEach(item => {
                        if (item.text.indexOf(value.trim()) !== -1) {
                          tempList.push(item.text);
                        }
                    })
                    this.autoCompleteData=tempList
                 }
                 this.setProjectNum(value)
            }
                     
        },
        computed: {
            ...mapState( // 语法糖
              ['getFilterResult','projectNum'] // 相当于this.$store.dispatch('modifyName'),提交这个方法
            ),
            projectList() {
                return this.$store.state.projectList
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

.fontsize-f{
  text-align: center;
}
.fontsize-b{
  font-size: 15px;
  background-color: #F2F2F2;
 border-radius: 3px;
 padding: 3.5px;
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

