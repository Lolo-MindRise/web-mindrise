export type ServiceId = 'agents' | 'n8n' | 'consulting' | 'training' | 'mcp' | 'web';

export const SERVICE_SLUGS: Record<ServiceId, string> = {
  agents: 'agents-ia',
  n8n: 'automatitzacions-n8n',
  consulting: 'consultoria-ia',
  training: 'formacio-a-mida',
  mcp: 'integracions-mcp',
  web: 'disseny-web',
};

export const SERVICE_IDS: ServiceId[] = ['agents', 'n8n', 'consulting', 'training', 'mcp', 'web'];

export const SLUG_TO_ID: Record<string, ServiceId> = Object.fromEntries(
  Object.entries(SERVICE_SLUGS).map(([id, slug]) => [slug, id as ServiceId])
) as Record<string, ServiceId>;
