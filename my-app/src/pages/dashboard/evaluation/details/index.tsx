import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../../title/title';
import { Divider, Paper } from '@material-ui/core';

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

export default function Deposits() {
    return (
        <React.Fragment>

            <Typography className='gradient' sx={{ fontSize: '1.5rem', fontWeight:'bold' }} component={'h2'}  >Evaluation details</Typography>
            <div className='flex mt-3 text-sm'>
                <Typography  sx={{ flex: 1, fontSize:'0.9rem' }}>
                    Type:
                </Typography>
                <Typography color="gray" sx={{ flex: 1, fontSize:'0.9rem' }}>
                    One-Step
                </Typography>
            </div>
            
            <div>
                <hr className='mb-2 mt-2 bg-neutral-900 border-neutral-700'></hr>
            </div>
            <div className='flex'>
                <Typography sx={{ flex: 1, fontSize:'0.9rem' }}>
                    Funding:
                </Typography>
                <Typography color="gray" sx={{ flex: 1, fontSize:'0.9rem' }}>
                    $2,000
                </Typography>
            </div>
            <div>
                <hr className='mb-2 mt-2 bg-neutral-900 border-neutral-700'></hr>
            </div>
            <div className='flex'>
                <Typography sx={{ flex: 1, fontSize:'0.9rem' }}>
                    Trading days:
                </Typography>
                <Typography color="gray" sx={{ flex: 1, fontSize:'0.9rem' }}>
                    ...?
                </Typography>
            </div>
          
            <div>
                <hr className='mb-2 mt-2 bg-neutral-900 border-neutral-700'></hr>
            </div>
        
            <div className='flex'>
                <Typography sx={{ flex: 1, fontSize:'0.9rem' }}>
                    Status:
                </Typography>
                <Typography color="gray" sx={{ flex: 1, fontSize:'0.9rem' }}>
                    Challenge / Passed
                </Typography>
            </div>
            
            
        </React.Fragment>
    );
}