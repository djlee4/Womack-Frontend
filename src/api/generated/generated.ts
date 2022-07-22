import { api } from "../graph-base-api";

export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreatePartBrand = {
  name: Scalars["String"];
};

export type CreatePartCategory = {
  name: Scalars["String"];
};

export type CreatePartInput = {
  barcode: Scalars["String"];
  brand: CreatePartBrand;
  category?: InputMaybe<CreatePartCategory>;
  description: Scalars["String"];
  hasCore: Scalars["Boolean"];
  name: Scalars["String"];
  price?: InputMaybe<Scalars["Int"]>;
  quantity: Scalars["Int"];
  type?: InputMaybe<CreatePartType>;
};

export type CreatePartType = {
  name: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createPart: Part;
  removePart: Part;
  updatePart: Part;
};

export type MutationCreatePartArgs = {
  createPartInput: CreatePartInput;
};

export type MutationRemovePartArgs = {
  id: Scalars["Int"];
};

export type MutationUpdatePartArgs = {
  updatePartInput: UpdatePartInput;
};

export type Part = {
  __typename?: "Part";
  barcode: Scalars["String"];
  brand: PartBrand;
  category?: Maybe<PartCategory>;
  description: Scalars["String"];
  hasCore: Scalars["Boolean"];
  id: Scalars["String"];
  name: Scalars["String"];
  price?: Maybe<Scalars["Int"]>;
  quantity: Scalars["Int"];
  type?: Maybe<PartType>;
};

export type PartBrand = {
  __typename?: "PartBrand";
  id: Scalars["String"];
  name: Scalars["String"];
};

export type PartCategory = {
  __typename?: "PartCategory";
  id: Scalars["String"];
  name: Scalars["String"];
};

export type PartType = {
  __typename?: "PartType";
  id: Scalars["String"];
  name: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  findByBarcode: Part;
  part: Part;
  parts: Array<Part>;
};

export type QueryFindByBarcodeArgs = {
  barcode: Scalars["String"];
};

export type QueryPartArgs = {
  id: Scalars["Int"];
};

export type UpdatePartInput = {
  barcode?: InputMaybe<Scalars["String"]>;
  brand?: InputMaybe<CreatePartBrand>;
  category?: InputMaybe<CreatePartCategory>;
  description?: InputMaybe<Scalars["String"]>;
  hasCore?: InputMaybe<Scalars["Boolean"]>;
  id: Scalars["Int"];
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Int"]>;
  quantity?: InputMaybe<Scalars["Int"]>;
  type?: InputMaybe<CreatePartType>;
};

export type PartsQueryVariables = Exact<{ [key: string]: never }>;

export type PartsQuery = {
  __typename?: "Query";
  parts: Array<{
    __typename?: "Part";
    id: string;
    name: string;
    barcode: string;
    quantity: number;
    description: string;
    hasCore: boolean;
    price?: number | undefined;
    brand: { __typename?: "PartBrand"; id: string; name: string };
    category?:
      | { __typename?: "PartCategory"; id: string; name: string }
      | undefined;
    type?: { __typename?: "PartType"; id: string; name: string } | undefined;
  }>;
};

export type CreatePartMutationVariables = Exact<{
  createPartInput: CreatePartInput;
}>;

export type CreatePartMutation = {
  __typename?: "Mutation";
  createPart: {
    __typename?: "Part";
    id: string;
    name: string;
    barcode: string;
    quantity: number;
    description: string;
    hasCore: boolean;
    price?: number | undefined;
    brand: { __typename?: "PartBrand"; id: string; name: string };
    category?:
      | { __typename?: "PartCategory"; id: string; name: string }
      | undefined;
    type?: { __typename?: "PartType"; id: string; name: string } | undefined;
  };
};

export type FindByBarcodeQueryVariables = Exact<{
  barcode: Scalars["String"];
}>;

export type FindByBarcodeQuery = {
  __typename?: "Query";
  findByBarcode: {
    __typename?: "Part";
    id: string;
    name: string;
    barcode: string;
    quantity: number;
    description: string;
    hasCore: boolean;
    price?: number | undefined;
    brand: { __typename?: "PartBrand"; id: string; name: string };
    category?:
      | { __typename?: "PartCategory"; id: string; name: string }
      | undefined;
    type?: { __typename?: "PartType"; id: string; name: string } | undefined;
  };
};

export const PartsDocument = `
    query parts {
  parts {
    id
    name
    barcode
    quantity
    description
    brand {
      id
      name
    }
    hasCore
    price
    category {
      id
      name
    }
    type {
      id
      name
    }
  }
}
    `;
export const CreatePartDocument = `
    mutation createPart($createPartInput: CreatePartInput!) {
  createPart(createPartInput: $createPartInput) {
    id
    name
    barcode
    quantity
    description
    brand {
      id
      name
    }
    hasCore
    price
    category {
      id
      name
    }
    type {
      id
      name
    }
  }
}
    `;
export const FindByBarcodeDocument = `
    query findByBarcode($barcode: String!) {
  findByBarcode(barcode: $barcode) {
    id
    name
    barcode
    quantity
    description
    brand {
      id
      name
    }
    hasCore
    price
    category {
      id
      name
    }
    type {
      id
      name
    }
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    parts: build.query<PartsQuery, PartsQueryVariables | void>({
      query: (variables) => ({ document: PartsDocument, variables }),
    }),
    createPart: build.mutation<CreatePartMutation, CreatePartMutationVariables>(
      {
        query: (variables) => ({ document: CreatePartDocument, variables }),
      }
    ),
    findByBarcode: build.query<FindByBarcodeQuery, FindByBarcodeQueryVariables>(
      {
        query: (variables) => ({ document: FindByBarcodeDocument, variables }),
      }
    ),
  }),
});

export { injectedRtkApi as api };
export const {
  usePartsQuery,
  useLazyPartsQuery,
  useCreatePartMutation,
  useFindByBarcodeQuery,
  useLazyFindByBarcodeQuery,
} = injectedRtkApi;
