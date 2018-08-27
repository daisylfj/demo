<template>
	<div class="filter-elements">
    	<div class="filter-element" v-for="(filter, index) in filters" :key="index" :name="index">	
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
        </div>
    </div>
</template>

<style scoped>

.bfformat{
 font-size: 12px;
 border-radius: 3px;
 margin-right:5%;
 margin-left: 8.5%;
}
</style>