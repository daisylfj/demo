<template>
  <div class="hello">
    <Content :style="{padding: '5px 16px 16px'}">
        <Breadcrumb class="page-header" :style="{margin: '30px 8.5%'}">
            <BreadcrumbItem class="fontsize">
                <Icon type="document-text"></Icon>  ACT
            </BreadcrumbItem> 
        </Breadcrumb>
        <Breadcrumb class="fontsize-b" :style="{margin: '10px 8.5%'}">
            <BreadcrumbItem to="/">
                 HOME 
            </BreadcrumbItem> 
            <BreadcrumbItem >
                 ACT
            </BreadcrumbItem> 
        </Breadcrumb>
        <br>
        <Breadcrumb class="page-header" :style="{margin: '10px 8.5%'}">
            <BreadcrumbItem class="fontsize">
                BILLING DETAILS
            </BreadcrumbItem> 
        </Breadcrumb>
        <Breadcrumb class="fontsize-b" :style="{margin: '30px 8.5%'}">
             <Icon type="information-circled"></Icon>
             Please note there might be some delay in sync supporting as it requires daily data report from SAP. Last refresh time:  {{date | formatDate}}
        </Breadcrumb>
        <Form class="fsize">
            <FormItem >
                <Row>
                <Col :xs="{ span: 3, offset: 16}" >
                    <p style="font-size: 15px">(含税)</p>
                </Col>
                </Row>
            <Row>
                <Col :xs="{ span: 4, offset: 5}" >
                    <p style="font-size: 15px">Sold to Party 客户名称</p>
                </Col>
                <Col :xs="{ span: 5, offset: 2 }" >
                     {{getProjectItem.company}} 
                </Col>
            </Row>
            <Row>
                <Col :xs="{ span: 4, offset: 5}" >
                    <p style="font-size: 15px">Total Amount 合同总金额</p>
                </Col>
                <Col :xs="{ span: 5, offset: 2 }" >
                     {{getProjectItem.totalcost}} 
                </Col>
                <Col :xs="{ span: 3}" >
                    <p style="font-size: 15px">CNY</p>
                </Col>
            </Row>
            <Row>
                <Col class="page-middle":xs="{ span: 4, offset: 5}" >
                    <p class="background-s" style="font-size: 15px">Billed 已开票金额累计</p>
                </Col>
                <Col class="page-middle fontcol":xs="{ span: 2}" >
                5
                </Col>
                <Col class="page-middle":xs="{ span: 5}" >
                     {{getProjectItem.billedcost}} 
                </Col>
                
                <Col class="page-middle" :xs="{ span: 3 }" >
                    <p style="font-size: 15px">CNY</p>
                </Col>
            </Row>
            </FormItem>
             <FormItem >
            <Row>
                <Col :xs="{ span: 4, offset: 5}" >
                    <p style="font-size: 15px">Paid Total 已付款金额累计</p>
                </Col>
                <Col :xs="{ span: 5, offset: 2 }" >
                     {{getProjectItem.billedcost}} 
                </Col>
            </Row>
            <Row>
                <Col :xs="{ span: 4, offset: 5}" >
                    <p style="font-size: 15px">Un-paid Total 未付款金额</p>
                </Col>
                <Col :xs="{ span: 5, offset: 2 }" >
                     {{getProjectItem.totalcost-getProjectItem.billedcost}}
                </Col>
                <Col :xs="{ span: 3 }" >
                    <p style="font-size: 15px">CNY</p>
                </Col>
            </Row>
            <Row>
                <Col class="page-middle":xs="{ span: 4, offset: 5}" >
                    <p class="background-s" style="font-size: 15px">Not Billed 未开票总余额</p>
                </Col>
                <Col class="page-middle fontcol":xs="{ span: 2}" >
                5
                </Col>
                <Col class="page-middle ":xs="{ span: 5}" >
                    {{getProjectItem.totalcost-getProjectItem.billedcost}}
                </Col>
               
                <Col class="page-middle" :xs="{ span: 3}" >
                    <p style="font-size: 15px">CNY</p>
                </Col>
            </Row>
            </FormItem>
        </Form>

        <Row class="page-header" :style="{margin: '30px 8.5%'}">
            <Col :xs="{ span: 6}">
            <BreadcrumbItem class="fontsize">
                BILLING REQUEST FORM
            </BreadcrumbItem>
            </Col>
            <Col :xs="{ span: 4, offset: 14}">
            <Button  icon="edit" @click="modal1 = true">Open a new request</Button>
            <Modal v-model="modal1">
                <p slot="header">
                    <Icon  type="help"></Icon>
                    注意 Warning
                </p>
                <div style="text-align:center">
                    <p>您当前申请表中的录入信息将会被清空，请确认是否要创建新表单:</p>
                    <p>Are you going to clear all the information then start a new request?</p>
                </div>
                <div slot="footer">
                    <Button icon="checkmark" @click="renew" >是</Button>
                    <Button icon="close" @click="cal">否</Button>
                </div>
            </Modal>
            </Col>
        </Row>

        <Breadcrumb class="fontsize-b" :style="{margin: '30px 8.5%'}">
             提示：本申请表适用<span>{{getFilterResult}}</span>类型项目
        </Breadcrumb>

       <Form class="fsize">
            <FormItem>
            <Row >
                <Col :xs="{span: 5, offset: 2 }" >
                    <p style="font-size: 12px">Nielsen Billing Entity 尼尔森开票主体 <span style="color: red">*</span>
                        <Tooltip  placement="top" content="尼尔森开票主体需与合同一致">
                            <Icon type="help-circled"></Icon>
                        </Tooltip>
                    </p>
                </Col>
                <Col :xs="{ span: 4}" >
                    <Select v-model="getNBE" clearable @on-change="ifIsAble" placeholder="Please choose 请选择" >
                    <Option v-for="item in NBEList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </Col>
                 <Col :xs="{ span: 5, offset: 2}" >
                    <p style="font-size: 12px">VAT Examption 是否需要申请免税 <span style="color: red">*</span>
                     <Tooltip  placement="top" content="免税申请仅适用于广州尼尔森市场研究有限公司与境外（包含港澳台）客户签署的合同"><Icon type="help-circled"></Icon>
                    </Tooltip>
                   </p>
                </Col>
                <Col :xs="{ span: 4}" >
                    <Select v-model="getVAT" clearable v-bind:disabled="isAble" placeholder="Please choose 请选择" >
                    <Option v-for="item in VATList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </Col>
            </Row>
        
            <Row >
                <Col :xs="{span: 5, offset: 2 }" >
                    <p style="font-size: 12px">Document Currency 开票货币 <span style="color: red">*</span></p>
                </Col>
                <Col :xs="{ span: 4}" >
                    <Select v-model="getDC" clearable placeholder="Please choose 请选择" >
                    <Option v-for="item in DCList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </Col>
                 <Col :xs="{ span: 5, offset: 2}" >
                    <p style="font-size: 12px">Invoice Type 发票类型 <span style="color: red">*</span></p>
                </Col>
                <Col :xs="{ span: 4}" >
                    <Select v-model="getIY" clearable placeholder="Please choose 请选择" >
                    <Option v-for="item in IYList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </Col>
            </Row>
          
            <Row >
                <Col :xs="{span: 5, offset: 2 }" >
                    <p style="font-size: 12px">Job No. 项目编号 (如有多个，以分号隔开) <span style="color: red ">*</span></p>
                </Col>
                <Col :xs="{ span: 4}" >
                    <p style="{display: inline-block;width: 100%;height: 32px;line-height: 1.5;padding: 4px 7px;font-size: 12px;border: 1px solid #dddee1;border-radius: 4px;color: #495060;background-color: #fff;position: relative;cursor: text;}">{{projectNum}}</p>
                   
                </Col>
                 <Col :xs="{ span: 5, offset: 2}" >
                    <p style="font-size: 12px">Last Billing 是否为尾款（全款）发票 <span style="color: red">*</span></p>
                </Col>
                <Col :xs="{ span: 4}" >
                    <Select v-model="getLB" clearable placeholder="Please choose 请选择" >
                    <Option v-for="item in LBList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </Col>
            </Row>
        </FormItem>

        
        <div>
            <Row class="bfformat">
                <Col style="background-color: #F2F2F2;padding-bottom: 5px;color:#F2F2F2":xs="{ span:4}">
                    2
                </Col>
                 <Col style="background-color: #F2F2F2":xs="{ span: 3}" >
                    <Tooltip  placement="top" content="请参考客户需求，如无特殊要求，RMS 为零研费，其他可以选择咨询服务费">
                        <Icon type="help-circled"></Icon>
                    </Tooltip>
                </Col>
                <Col style="background-color: #F2F2F2;padding-bottom: 5px" :xs="{ span: 3}" >
                   Invoice Value
                </Col>
                <Col style="background-color: #F2F2F2":xs="{ span: 2}" >
                    <Tooltip  placement="top" content="请填写客户联系人或尼尔森员工">
                        <Icon type="help-circled"></Icon>
                    </Tooltip>
                </Col>
                <Col style="background-color: #F2F2F2;padding-bottom: 5px;color:#F2F2F2":xs="{ span:3}" >
                    2
                </Col>
                <Col style="background-color: #F2F2F2":xs="{ span: 4}" >
                    <Tooltip  placement="top" content="如收件人为尼尔森员工，请注明办公室地址">
                        <Icon type="help-circled"></Icon>
                    </Tooltip>
                </Col>
                <Col style="background-color: #F2F2F2;padding-bottom: 5px;color:#F2F2F2":xs="{ span:4}" >
                    2
                </Col>
            </Row>
            <Row class="bfformat" >
                <Col style="background-color: #F2F2F2":xs="{span: 2}" >
                   Invoice Title
                </Col>
                <Col style="background-color: #F2F2F2":xs="{ span: 2}" >
                    Job Name
                </Col>
                 <Col style="background-color: #F2F2F2":xs="{ span: 3}" >
                   Invoice Subject
                </Col>
                <Col style="background-color: #F2F2F2":xs="{ span: 3}" >
                   (Including Tax)
                </Col>
                <Col style="background-color: #F2F2F2":xs="{ span: 2}" >
                   Recipient
                </Col>
                <Col style="background-color: #F2F2F2":xs="{ span: 3}" >
                  Phone No.
                </Col>
                <Col style="background-color: #F2F2F2":xs="{ span: 4}" >
                   Delivery Address
                </Col>
                <Col style="background-color: #F2F2F2":xs="{ span: 4}" >
                  Specific Info Print on Invoice
                </Col>
            </Row>
            <Row class="bfformat">
                <Col style="background-color: #F2F2F2":xs="{span: 2}" >
                   发票抬头<span style="color: red">*</span>
                </Col>
                <Col style="background-color: #F2F2F2":xs="{ span: 2}" >
                    项目描述<span style="color: red">*</span>
                </Col>
                 <Col style="background-color: #F2F2F2":xs="{ span: 3}" >
                   发票科目<span style="color: red">*</span>
                </Col>
                <Col style="background-color: #F2F2F2":xs="{ span: 3}" >
                   发票金额(含税)<span style="color: red">*</span>
                </Col>
                <Col style="background-color: #F2F2F2":xs="{ span: 2}" >
                   发票收件人<span style="color: red">*</span>
                </Col>
                <Col style="background-color: #F2F2F2":xs="{ span: 3}" >
                  收件人电话号码<span style="color: red">*</span>
                </Col>
                <Col style="background-color: #F2F2F2":xs="{ span: 4}" >
                   发票邮寄地址<span style="color: red">*</span>
                </Col>
                <Col style="background-color: #F2F2F2":xs="{ span: 4}" >
                  显示在发票上的特定信息
                </Col>
            </Row>
         
         <!---筛选------->
            
            <Row class="bfformat">
                <Col style="background-color: #F2F2F2;padding-bottom: 8px":xs="{span: 2}" >
                   <Input v-model="getInvoiceTitle" placeholder="发票抬头" ></Input>
                </Col>
                <Col style="background-color: #F2F2F2;padding-bottom: 8px":xs="{ span: 2}" >
                    <Input v-model="getJobName" placeholder="项目描述" ></Input>
                </Col>
                 <Col style="background-color: #F2F2F2;padding-bottom: 8px":xs="{ span: 3}" >
                   <Select v-model="getInvoiceSub" clearable placeholder="请选择" >
                    <Option v-for="item in InvoiceSubList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </Col>
                <Col style="background-color: #F2F2F2;padding-bottom: 8px":xs="{ span: 3}" >
                   <Input v-model="getInvoiceValue" placeholder="发票金额" ></Input>
                </Col>
                <Col style="background-color: #F2F2F2;padding-bottom: 8px":xs="{ span: 2}" >
                   <Input v-model="getRecipient" placeholder="收件人" ></Input>
                </Col>
                <Col style="background-color: #F2F2F2;padding-bottom: 8px":xs="{ span: 3}" >
                   <Input v-model="getPhone" placeholder="电话号码" ></Input>
                </Col>
                <Col style="background-color: #F2F2F2;padding-bottom: 8px":xs="{ span: 4}" >
                   <Input v-model="getDeliveryAddress" placeholder="发票邮寄地址" ></Input>
                </Col>
                <Col style="background-color: #F2F2F2;padding-bottom: 8px":xs="{ span: 4}" >
                   <Input v-model="getSpecific" placeholder="例如1st/2nd Payment" ></Input>
                </Col>
                <Col :xs="{ span: 1}" >
                    <Button shape="circle" size="small" icon ="plus" @click="addFilter"></Button><Button shape="circle" size="small" icon ="minus" @click="addFilter"></Button>
                </Col>
            </Row>
            <filterdiv/>
        </div>  
      
            <FormItem  :style="{margin: '10px 8.5%'}">
            <Row >
               针对超过 10 个开票细项的情况，建议使用专用模板  <Button icon="upload" @click="modal2 = true">批量上传 Mass Upload</Button>
            <Modal v-model="modal2">
                <p slot="header">
                    <Icon type="ios-warning-outline"></Icon>
                    <span>批量上传导入 Mass Upload Line Item</span>
                </p>
                <div >
                    <Row>
                        <Col :xs="{span: 5}">步骤一：点击按钮</Col>
                        <Col :xs="{span: 6}"><a class='fontsize-a' href="https://drive.google.com/file/d/1hU0Wbk2xpRteUlAw952F2xEKAOJMAgkt/view?usp=sharing" download="Billing Platform 批量发票申请模板 new.xls"><Icon type="archive"></Icon>下载标准模板</a></Col>
                        <Col :xs="{span: 13}">获得 Excel 模板</Col>
                    </Row><br>
                    <Row style="height:38px">
                        <Col :xs="{span: 20}">步骤二：按照规格要求，将开票细项的内容相应更新在已下载的工作表中</Col>
                    </Row>
                    <Row style="height:30px">
                        <Col :xs="{span: 5}">步骤三：点击按钮</Col>
                        <Col :xs="{span: 6}"><Upload multiple action="//jsonplaceholder.typicode.com/posts/">
                    <Button icon="ios-cloud-upload-outline">上传批量条目</Button></Upload></Col>
                    <Col :xs="{span: 13}">，选择上述编辑后的文件，导入完成</Col>
                    </Row>
                </div>
                <div slot="footer">
                    <Button icon="md-close" @click="cancel">Close</Button>
                </div>
            </Modal>
            </Row>
            <Row >
              We recommend that you use Mass Upload function if there are more than 10 line items.
            </Row>
            </FormItem>
            <FormItem  :style="{margin: '10px 8.5%'}">
            <Row >
              当前提出的开票金额（含税）总计：<Icon type="ios-cart"></Icon> {{getInvoiceValue}}.00
            </Row>
            </FormItem>
            <FormItem  :style="{margin: '10px 8.5%'}">
             <Col :xs="{span: 3, offset: 2 }" >
                    <p style="font-size: 12px">Notes to Finance <Icon type="chatbox"></Icon> </p>
                </Col>
                <Col :xs="{ span: 13, offset: 0}" >
                    <Input  v-model="getSpecialRequirement" type="textarea" :rows="3" placeholder="Special Requirement 特殊要求，例如：需要打印客户PO原件随票寄出" ></Input>
                </Col>
                 <Col :xs="{ span: 4, offset: 2}" >
                 
                 <Upload multiple action="//jsonplaceholder.typicode.com/posts/">
                    <Button icon="paperclip">附件 Attachment</Button>
                </Upload>
                    如有 PO, GR, DO 文件请上传
                </Col>
            </FormItem>
            <FormItem  :style="{margin: '10px 8.5%'}">
             <Col :xs="{span: 3, offset: 2 }" >
                    <p style="font-size: 12px">Cc to<Icon type="email"></Icon></p>
                </Col>
                <Col :xs="{ span: 13, offset: 0}" >
                    <Input  v-model="getSpecialRequirement" placeholder="如需在通知邮件中抄送他人，请填写其邮箱地址（以英文逗号分隔收件人）" ></Input>
                </Col>
            </FormItem>
            <FormItem  :style="{margin: '10px 8.5%'}">
             <Col :xs="{span: 4, offset: 8 }" >
                    <Button type="ghost" icon="filing">保存草稿 Save Draft</Button>
                </Col>
                <Col :xs="{ span: 4}" >
                    <Button type="ghost" icon="arrow-right-c">下一步 Next Step</Button>
                </Col>
            </FormItem>
        <Row>
        <div class="page-footer" :style="{margin: '30px 8.5%'}">
            Copyright © 2018 The Nielsen Company (US), LLC. All rights reserved. Confidential and Proprietary
        </div>
        </Row>
    </Form>
    </Content>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import filterDivs from './filter-divs'

var padDate = function (value) {    //在月份、日期、小时等小于10时在前面补0
          return value<10?'0'+value:value;
        };
export default {
  name: 'ACT-sub',
  data () {
    return {
      NBEList: [
                    {
                        value: '广州尼尔森市场研究有限公司',
                        label: '广州尼尔森市场研究有限公司'
                    },
                    {
                        value: '广州尼尔森市场研究有限公司上海分公司',
                        label: '广州尼尔森市场研究有限公司上海分公司'
                    },
                    {
                        value: '上海尼尔森市场研究有限公司',
                        label: '上海尼尔森市场研究有限公司'
                    }
                ],
      VATList: [
                    {
                        value: 'NO 否',
                        label: 'NO 否'
                    },
                    {
                        value: 'YES 是',
                        label: 'YES 是'
                    }
                ],
      DCList: [
                    {
                        value: 'CNY 人民币',
                        label: 'CNY 人民币'
                    },
                    {
                        value: 'USD 美元',
                        label: 'USD 美元'
                    },
                    {
                        value: 'HKD 港币',
                        label: 'HKD 港币'
                    },
                    {
                        value: 'GBP 英镑',
                        label: 'GBP 英镑'
                    },
                    {
                        value: 'EUR 欧元',
                        label: 'EUR 欧元'
                    }
                ],
      IYList: [
                    {
                        value: '增值税普通发票',
                        label: '增值税普通发票'
                    },
                    {
                        value: '增值税专用发票',
                        label: '增值税专用发票'
                    },
                    {
                        value: '境外发票',
                        label: '境外发票'
                    }
                ],
      JNList: [
                    {
                        value: '增值税普通发票',
                        label: '增值税普通发票'
                    },
                    {
                        value: '增值税专用发票',
                        label: '增值税专用发票'
                    },
                    {
                        value: '境外发票',
                        label: '境外发票'
                    }
                ],
      LBList: [
                    {
                        value: 'NO 否',
                        label: 'NO 否'
                    },
                    {
                        value: 'YES 是',
                        label: 'YES 是'
                    }
                ],
                
      InvoiceSubList: [
                    {
                        value: '专项研究费',
                        label: '专项研究费'
                    },
                    {
                        value: '咨询服务费',
                        label: '咨询服务费'
                    }
                ],
                getInvoiceTitle:'',
                getJobName:'',
                getRecipient:'',
                getPhone:'',
                getDeliveryAddress:'',
                getSpecific:'',
                getInvoiceValue:'',
                getNBE: '',
                getVAT: '',
                getDC: '',
                getIY: '',
                getJN: '',
                getInvoiceSub: '',
                getLB: '',
                getInvoiceTitle: '',
                getSpecialRequirement: '',
                modal1: false,
                modal2: false,
                date:new Date(), //Date中文”日期”，Date继承自Object对象，此对象提供操作日期与时间的函数
                isAble: true
            
    
    }
  },
  computed: {
      ...mapState(['getFilterResult','projectNum']), // 动态计算属性，相当于this.$store.getters.resturantName\
      ...mapGetters(['getProjectItem'])
  },
  components: {
    'filter-divs': filterDivs
  },
  methods:{
            cal () {
                this.modal1 = false;
            },
            cancel () {
                this.modal2 = false;
            },
            renew () {
                this.modal1 = false;
                this.$router.push({path: '/ACT'});
            },
            downloadFile() {
                var filename='Billing Platform 批量发票申请模板 new.xls';
                window.open('https://drive.google.com/file/d/1hU0Wbk2xpRteUlAw952F2xEKAOJMAgkt/view?usp=sharing', '_blank', 'fullscreen=no,width=400,height=300');
            },
            ifIsAble(){
                var getisable=this.getNBE;
                console.log(getisable);
                if (getisable==='广州尼尔森市场研究有限公司'){
                   this.isAble = false;
                }else{
                    this.getVAT="NA 不适用";
                    this.isAble = true;
                    
                }
            }
    },
    filters:{   //过滤器
        formatDate:function (value) {   //value为需要过滤的数据
            var date = new Date();
            var year = date.getFullYear();
            var month = padDate(date.getMonth()+1);
            var day = padDate(date.getDate());
            var hours = padDate(date.getHours());
            var minutes = padDate(date.getMinutes());
            var seconds = padDate(date.getSeconds());

        
            //整理数据并返回
            return year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds;
        }

        
    }
   
}
</script>

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
.textpos{
    position: center;
}
.fontsize{
  text-align: center;
  font-size: 20px;
  
}
.fontsizebread{
  font-weight: 700px;
  color: #495060;
  
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
.bfformat{
 font-size: 12px;
 border-radius: 3px;
 margin-right:5%;
 margin-left: 8.5%;

}
.fontsize-a{
    font-size: 12px;
    background-color: #f7f7f7;
    border-radius: 3px;
    padding: 3.5px;
    color: #495060;
    border: 1px solid #dddee1;
    line-height: 1.5;
    padding: 6px 15px;
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
.page-middle {
    padding-bottom: 5px;
    border-bottom: 2px solid #eee;
}
.page-footer {
    border-top-style: dotted;
    border-top-color: #eee;
    border-top-width: 1.5px;
    padding-top: 20px;
    text-align: center;    
}
.fontcol{
    color: white;
}
.fsize{
    min-height: 276px;
}
.iconpostion{
    right: 10px;
    position:relative;
    width:20px;
}
</style>


