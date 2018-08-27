<template>
    <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
            <BreadcrumbItem>Booking System</BreadcrumbItem>
            <BreadcrumbItem>Team Member</BreadcrumbItem>
        </Breadcrumb>
        <Table border :columns="columns7" :data="data6"></Table>
    </Content>
</template>
<script>
    export default {
        data () {
            return {
                columns7: [
                    {
                        title: 'Name',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Avatar', {
                                    props: {
                                        src: params.row.url
                                    }
                                }),
                                h('strong', ' ' + params.row.name)
                            ]);
                        }
                    },
                    {
                        title: 'Title',
                        key: 'title'
                    },
                    {
                        title: 'Email',
                        width: 200,
                        key: 'email'
                    },
                    {
                        title: 'Employee #',
                        key: 'employee',
                        sortable: true
                    },
                    {
                        title: 'Phone #',
                        key: 'phone',
                        sortable: true
                    },
                    {
                        title: 'Location',
                        key: 'address',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'location'
                                    }
                                }),
                                h('span', ' ' + params.row.address)
                            ]);
                        }
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Edit')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: 'Daisy Li',
                        title: 'Analyst',
                        employee: '07757415',
                        phone: '8723 5790',
                        email: 'daisy.li@nielsen.com',
                        address: 'CN-Guangzhou',
                        url: 'https://plus.google.com/_/focus/photos/public/AIbEiAIAAABDCMSZt7vzlJS6CCILdmNhcmRfcGhvdG8qKGNhODc2YmVjZmMzZjI1ZDgxNjI4MjRmYzg2MTgxNDE1Yzc3YWI0YWEwAUji-y6HPch3WHRtF_mwDsyjTek_'
                    },
                    {
                        name: 'Kyle Huang',
                        title: 'Senior Manager',
                        employee: '07751474',
                        phone: '8723 4677',
                        email: 'kyle.huang@nielsen.com',
                        address: 'CN-Guangzhou',
                        url: 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s200/photo.jpg'
                    },
                    {
                        name: 'Sophia Xie',
                        title: 'Associate Manager',
                        employee: '07754864',
                        phone: '8723 4682',
                        email: 'sophia.xie@nielsen.com',
                        address: 'CN-Guangzhou',
                        url: 'https://plus.google.com/_/focus/photos/public/AIbEiAIAAABECNbastOw6b3X9AEiC3ZjYXJkX3Bob3RvKig0YjY1M2I0NmJhNTAxZGJiMDcxNmI5YzYyYTY2MjM4OTZjMmM4Y2IyMAEOdFnzUYZ4XvE6ZjMxRli-ujno3A'
                    },
                    {
                        name: 'Kenny Qi',
                        title: 'Manager',
                        employee: '07751986',
                        phone: '8723 4723',
                        email: 'kenny.qi@nielsen.com',
                        address: 'CN-Guangzhou',
                        url: 'https://plus.google.com/_/focus/photos/public/AIbEiAIAAABDCNDRn5qZ6abwZiILdmNhcmRfcGhvdG8qKGY3YjBjZGU2YWMzNWFhN2MyYWE4ZGIwOTNhYzAxODhlNTI1Yjk4NmQwAeGyOj--7R8lls4jEuGa2jbDE6c0'
                    },
                    {
                        name: 'Junyi Zhu',
                        title: 'Associate Manager',
                        employee: '07752401',
                        phone: '8721 6317',
                        email: 'junyi.zhu@nielsen.com',
                        address: 'CN-Shanghai',
                        url: 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s200/photo.jpg'
                    },
                    {
                        name: 'Robin Zhou',
                        title: 'Senior Analyst',
                        employee: '07758049',
                        phone: '8723 9876',
                        email: 'robin.z.zhou@nielsen.com',
                        address: 'CN-Guangzhou',
                        url: 'https://plus.google.com/_/focus/photos/public/AIbEiAIAAABECJDgxsH5gdTBuAEiC3ZjYXJkX3Bob3RvKig4N2ZkZTgyYjUzMDQ1YzY0OTBiNDk4ZjA3OWFhZGIyZWZkNDFhODU0MAGM_1dzV7hMxvktn7vMZUpPYlOQzw'
                    },
                    {
                        name: 'Yi Liu',
                        title: 'Analyst',
                        employee: '07758593',
                        phone: '8721 6399',
                        email: 'yi.y.liu@nielsen.com',
                        address: 'CN-Shanghai',
                        url: 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s200/photo.jpg'
                    }
                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Title：${this.data6[index].title}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>

