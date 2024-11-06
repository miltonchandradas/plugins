namespace demo;

using {cuid} from '@sap/cds/common';

entity Suppliers : cuid {
    name    : String;
    contact : String;
}
