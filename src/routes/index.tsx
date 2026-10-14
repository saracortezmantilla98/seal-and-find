import { createFileRoute } from '@tanstack/react-router';
import SelloDemo from '../components/sello/demo';
import '../components/sello/demo.css';
export const Route = createFileRoute('/')({
  head: () => ({meta:[{title:'SELLO · Encuentra el recurso correcto'},{name:'description',content:'Instala SELLO, conecta tus fuentes y encuentra, certifica y reutiliza los recursos de tu equipo de diseño.'},{property:'og:title',content:'SELLO · Encuentra el recurso correcto'},{property:'og:description',content:'Una sola búsqueda para los recursos de SharePoint, Google Drive y Figma, con versión, vigencia y responsable.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
  component: SelloDemo,
});
