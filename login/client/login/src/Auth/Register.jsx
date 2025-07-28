import React from 'react'
import {Card, Flex, Typography, Form} from 'antd'



const Register = () => {
  return (
    <div>
      <Card className='form-container'>
        <Flex>
            <Flex>
                <Typography.Title level={3} strong className='title'>Create an account</Typography.Title>
                <Typography.Text type="secondary" strong className='slogan'>Join for exclusive access!.</Typography.Text>
                <Form layout='vertical' onFinish={handleregister}>

                </Form>
            </Flex>




            <Flex></Flex>

        </Flex>
      </Card>
    </div>
  )
}

export default Register
