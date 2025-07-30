import Typography from '@mui/material/Typography';

// PENDIENTE: Definir props
interface Info {
  apellidos: string;
  nombres: string;
  paralelo: string;
}

export default function Student({ apellidos, nombres, paralelo }: Info) {
    return (
        <>
            <Typography component="p" variant="h4">
                {/* Renderizar apellidos y nombres */}
                {apellidos}, {nombres}
            </Typography>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                {/* Renderizar paralelo */}
                Paralelo # {paralelo}
            </Typography>
        </>
    )
}
