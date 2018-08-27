<template>
  <div class="hello">
    <Content :style="{padding: '5px 16px 16px'}">
        <Breadcrumb class="page-header" :style="{margin: '30px 8.5%'}">
            <BreadcrumbItem class="fontsize">
                <Icon type="ios-alert"></Icon>  FAQ
            </BreadcrumbItem> 
        </Breadcrumb>
        <Breadcrumb class="fontsize-b" :style="{margin: '30px 8.5%'}">
            <BreadcrumbItem to="/">
                 HOME 
            </BreadcrumbItem> 
            <BreadcrumbItem >
                 FAQ
            </BreadcrumbItem> 
        </Breadcrumb>


        <Collapse v-model="CollapsePanel1" accordion  :style="{margin: '5px 8.5%'}">
            <Panel name="1" class="Cpanel">
                退票重开流程
                <p slot="content">
                  由于发票金额、内容或客户税号信息变更等原因需要申请重开发票，请参照以下流程操作：
                  <br>

                    1.填写 Credit Memo Request 并取得表单中对应职级的审批意见
                    <br>
                    2.将发票原件（第二、三联）递交财务部
                    <br><br>
                      广州退票地址：广州市中山五路68号五月花商业广场12楼<br>
                      邮编：510000<br>
                      收件人：SSC AR Team<br>
                      电话：020-83164000<br>

                      上海退票地址：上海市延安东路618号远洋商业大厦二期14楼A座<br>
                      收件人：Rita Gu<br>
                      电话：021-23269815<br><br>
                    3.收到 Credit Memo Request 和退票原件后，我们会尽快安排发票重开和寄送</p>
            </Panel>
            <Panel name="2" class="Cpanel">
                项目命名规则
                <p slot="content">项目编号对于平台的申请流程至关重要，请务必遵循以下命名规则：

                RMS Core R + year + last 6 digits of contract# in SF: eg. 2017-06-149701  R17-149701
                SFA R + year + last 6 digits of contract# in SF: eg. 2017-06-150359  R17-150359
                CI / NU Proposal Code in Protrack: eg. CNLP161122
                Innovation WB Study ID in SF: eg. 104439
                AAC A + year + last 6 digits of contract# in SF: eg. 2017-06-150689  A17-150689
                Neuro N + year + last 6 digits of contract# in SF: eg. 2017-04-148388  N17-148388
                Other ME M + year + last 6 digits of contract# in SF: eg. 2017-05-149419  M17-149419
                Sports SP + year + last 6 digits of contract# in SF: eg. 2017-06-151368  SP17-151368</p>
            </Panel>
            <Panel name="3" class="Cpanel">
                申请提交后几日内能开出发票？
                <p slot="content">财务部将于每周二、五集中处理截至当日中午12点前收到的开票申请，如有紧急开票需求，请在 DISCOVER 页面为对应的开票记录点击"申请加急"按钮。
                加急开票申请将流转到 Revenue Controller 审批，审批通过后方可开票。

                The billing rhythm is twice weekly on Tuesday and Friday, cutoff by noon. For any billing requests received before the cutoff, GCRS (Greater China Revenue Services) will issue the billing before COB. An urgent billing request can be initiated after filling out the standard form by clicking the button "Expedite" on DISCOVER page. Please note all urgent billing requests will route to Revenue Controller for approval before invoices can be issued.</p>
            </Panel>
            <Panel name="4" class="Cpanel">
                财务月结中可以申请开票吗？
                <p slot="content">财务月结中该平台仍然可接受开票申请。

                每月最后三个工作日至次月第四个工作日为财务月结，在此期间提交的申请将延后至每月开账后处理。</p>
            </Panel>
            <Panel name="5" class="Cpanel">
                如何查询特定项目的历史开票信息和付款状态？
                <p slot="content">
                  点击主页上的 DISCOVER 进入查询界面。在检索栏内输入项目编号 / 客户名称 / 申请表流水号（以 RID 开头的序列号）均可查询。

                  注：查询界面内仅支持搜索本平台（自 2017-10-25 上线至今）提交的申请表记录
                </p>
            </Panel>
            <Panel name="6" class="Cpanel">
                我的申请表可以编辑修改和再次提交吗？
               <p slot="content">状态为 Draft 或 Called Back 或 Rejected 的申请表可以被编辑和再次提交。方式如下：

                在 Search 页按下 Load 按钮或者直接搜关键字得出自己的申请表
                点击对应的流水号（RID），即可跳转到填表页面，继续编辑内容
                另外，状态为 Pending Finance Review 的申请表则需要先撤回（Called Back），方可进行修改及后续提交</p>
            </Panel>
            <Panel name="7" class="Cpanel">
                抄送他人的邮箱数量有限制吗？
                <p slot="content">
                  没有数量限制。

                  请在表单底部的 Cc To 的录入框内填写需要抄送通知的 Email Address（如有多个，以半角逗号隔开）

                  举例：san.zhang@nielsen.com, wu.wang@nielsen.com, hello.kitty@gmail.com 
                </p>    
            </Panel>
            <Panel name="8" class="Cpanel">
                为什么我在【发票抬头】录入框的联想表里找不到客户？
                <p slot="content">该自动联想列表是从后台数据库（客户税号清单）中获得。

                针对新合作的客户，该公司信息可能尚未被及时地录进 Client VAT List 中。

                若有大量的新客户税号信息需要入库，请向  gcrscoechina@nielsen.com 提供齐全的资料包含：

                客户名称
                纳税人识别号
                客户地址 / 电话
                银行账号 / 开户银行</p>
            </Panel>
            <Panel name="9" class="Cpanel">
                银行账户信息
                <p slot="content">广州尼尔森
                  广州尼尔森 CNY 账户： View Document （常用账户）
                  广州尼尔森 USD 账户： View Document
                  广州尼尔森 EUR 账户： View Document
                  广州尼尔森 HKD 账户： View Document
                  上海尼尔森： View Document
                  广上尼尔森： View Document</p>
            </Panel>
             <Panel name="10" class="Cpanel">
                财务部联系方式
                <p slot="content">
                  如对开票流程有任何疑问，请发送邮件至 Greater China Revenue Services CoE 小组：  gcrscoechina@nielsen.com
                </p>
            </Panel>
            <Panel name="11" class="Cpanel">
                开票平台技术支持
                <p slot="content">本网页平台由 China Commercial Excellence 团队搭建及提供开发支持<br>如您在使用过程中遇到技术疑难或紧急故障，请发送邮件（含 Troubleshoot 截屏和问题描述）至开发者：  kenny.qi@nielsen.com</p>
            </Panel>
            <Panel name="12" class="Cpanel">
                不可以投诉，只能提意见。在哪里提意见？
                <p slot="content">We want to hear your feedback so we can keep improving our app. Any questions and suggestion are welcomed.<br>任何意见或建议，欢迎在此提出： Feedback Survey</p>
            </Panel>
        </Collapse>
        

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
                CollapsePanel1:''
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
.Cpanel{
    
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