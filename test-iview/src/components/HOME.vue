<template>
  <div class="hello">
    <Content :style="{padding: '5px 16px 16px'}">
        <Breadcrumb class="page-header" :style="{margin: '30px 8.5%'}">
            <BreadcrumbItem class="fontsize">
                <Icon type="home"></Icon>  NLSN CHINA BILLING PLATFORM
            </BreadcrumbItem> 
        </Breadcrumb>
        <Breadcrumb class="fontsize-b":style="{margin: '30px 8.5%'}">
            <BreadcrumbItem >
                <Icon type="volume-medium"></Icon>  财务部将于每周二、五集中处理截至当日中午12点前收到的开票申请
            </BreadcrumbItem> 
        </Breadcrumb>
        <br>
        <Row>
        <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
            <Card style="height:300px">
              
                <p slot="title" style="height:80px">
                    <router-link to="/ACT">
                        <i class="ivu-icon ivu-icon-document-text iconsize"></i>
                    </router-link>
                </p>
                <br>
                <p class="fontsize">ACT</p>
                <br>
                <p class="fontsize-f">Raise your billing request now!</p>
            </Card>
        </Col>
        <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 1 }" >
            <Card style="height:300px">
                <p slot="title" style="height:80px">
                    <router-link to="/1-1"> 
                        <i class="ivu-icon ivu-icon-ios-search iconsize"></i>
                    </router-link>
                </p>
                <br>
                <p class="fontsize">DISCOVER</p>
                <br>
                <p class="fontsize-f">Track raised requests and modify saved drafts here!</p>
            </Card>
        </Col>
        <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 1 }" >
            <Card style="height:300px">
                <p slot="title" style="height:80px">
                    <router-link to="/FAQ">
                        <i class="ivu-icon ivu-icon-ios-help iconsize"></i>
                    </router-link>
                </p>
                <br>
                <p class="fontsize">FAQ</p>
                <br>
                <p class="fontsize-f">Have any question about the billing request process?</p>
            </Card>
        </Col>
    </Row>
    <Row>
        <div class="page-footer" :style="{margin: '30px 8.5%'}">
            Copyright © 2018 The Nielsen Company (US), LLC. All rights reserved. Confidential and Proprietary
        </div>
    </Row>
    </Content>
  </div>
</template>

<style scoped>
.ivu-icon{
  font-size: 20px;
  position: center;
  text-align:center;
}
.iconsize{
    font-size: 50px;
    position: center;
    margin: 20px 43% ;
}
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


</style>
