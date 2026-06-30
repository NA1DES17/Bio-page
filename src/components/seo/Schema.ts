import { SITE } from '@config/site';
import { buildLocalBusinessSchema, buildServiceSchema } from '@utils/metadata';
import type { ServiceSchema } from '@config/seo';

interface Props {
  services?: ServiceSchema[];
}

export function LocalBusinessSchema(_props: Props) {
  return JSON.stringify(buildLocalBusinessSchema());
}

export function ServiceSchema(data: ServiceSchema) {
  return JSON.stringify(buildServiceSchema(data));
}
