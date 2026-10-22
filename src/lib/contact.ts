import { business, serviceOptions } from '../data/business';

export interface ContactData { name: string; service: string; message: string }
export type ContactErrors = Partial<Record<keyof ContactData, string>>;

export function validateContact(data: ContactData): ContactErrors {
  const errors: ContactErrors = {};
  if (!data.name.trim()) errors.name = 'Escribí tu nombre.';
  else if (data.name.trim().length > 100) errors.name = 'Usá hasta 100 caracteres para el nombre.';
  if (!serviceOptions.includes(data.service)) errors.service = 'Elegí un servicio.';
  if (!data.message.trim()) errors.message = 'Contanos brevemente tu idea o consulta.';
  else if (data.message.trim().length > 2000) errors.message = 'Usá hasta 2000 caracteres para la consulta.';
  return errors;
}

export function buildWhatsAppUrl(data: ContactData): string {
  if (Object.keys(validateContact(data)).length) throw new Error('La consulta tiene campos inválidos.');
  const message = `Hola Mariana, soy ${data.name.trim()}.\n\nMe interesa: ${data.service}.\n\n${data.message.trim()}`;
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const directWhatsAppUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent('Hola Mariana, quisiera hacer una consulta sobre un proyecto.')}`;
