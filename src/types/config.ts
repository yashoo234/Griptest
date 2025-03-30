import { EnumSubscription } from './types';

type TypePaymentGateway = {
  baseUrl: string;
  emailParam: string;
  discountParam: string;
  variant: {
    standard: {
      monthly: string;
      annually: string;
    };
    premium: {
      monthly: string;
      annually: string;
    };
  };
  plan: {
    [key: number | string]: EnumSubscription;
  };
};

export type TypeConfig = {
  isSupabaseEnabled: boolean;
  app: {
    name: string;
    description: string;
    url: string;
  };
  crisp: {
    id: string;
    hideOnRoutes?: string[];
  };
  supportEmail: string;
  planCredits: {
    [key in EnumSubscription]: number;
  };
  lemonSqueezy: TypePaymentGateway;
  stripe: TypePaymentGateway;
  loops: {
    baseUrl: string;
  };
  resend: {
    senderEmailAddress: string;
  };
  sentry?: {
    dsn: string;
  };
};
