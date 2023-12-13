import { Box, Button, Divider, Paper} from '@mui/material'
import { Title } from '../title/title'
import { Form } from '../form/form'
import BasicTable from '../table/table'


const Withdraw = () => {
    return (

        <Box component="form"
     sx={{justifyContent:'center', display:'flex'}}
            noValidate
            autoComplete="off" >
            
            <Paper  sx={{display:'flex', gap:'1rem', flexDirection:'column', justifyContent:'left', pt:'1.5rem', pr:'2rem', pb:'2rem', pl:'2rem',  maxWidth:'40rem'}}>
            <Title />
            <Divider/>
                <Form />
                <BasicTable/>
                <Button fullWidth
            variant="contained"
            sx={{  background: 'linear-gradient(90deg, rgba(109,29,166,1) 25%, rgba(41,166,195,0.9444152661064426) 100%, rgba(33,9,121,0.36738445378151263) 100%)' }}>Confirm</Button>
            </Paper>
        </Box>
    )
}

export default Withdraw