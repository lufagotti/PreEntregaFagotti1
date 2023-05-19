import { Button, Grid, TextField } from '@mui/material'
import React from 'react'

const FormCheckout = ({handleChange, handleSubmit, errors}) => {
  return (
    <div style={{paddingTop:"30px"}}>
        <h1>Terminar compra</h1>
        <form action="" onSubmit={handleSubmit}>
            <Grid container spacing={2} flex justifyContent={"center"} paddingTop={4}>
                <Grid item xs={11} sm={7}>
                    <TextField 
                    id="outlined-basic" 
                    label="Nombre" 
                    variant="outlined" 
                    fullWidth 
                    name='nombre'
                    onChange={handleChange}
                    error={ errors.nombre ? true : false} 
                    helperText= {errors.nombre}
                    />
                </Grid>
                <Grid item xs={11} sm={7}>
                    <TextField 
                    id="outlined-basic" 
                    label="Telefono" 
                    variant="outlined" 
                    fullWidth
                    name='telefono' 
                    onChange={handleChange} 
                    error={ errors.telefono ? true : false}
                    helperText= {errors.telefono}
                    />
                </Grid>
                <Grid item xs={11} sm={7}>
                    <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined"  
                    fullWidth 
                    name='email'
                    onChange={handleChange}
                    error={ errors.email ? true : false}
                    helperText= {errors.email}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button type='submit' variant='contained' sx={{marginTop:2}} style={{backgroundColor:"#9c93b5"}}>Comprar</Button>
                </Grid>
            </Grid>
        </form>
    </div>
  )
}

export default FormCheckout