namespace demo;

using { cuid } from '@sap/cds/common';
using { Attachments } from '@cap-js/attachments';

entity Suppliers : cuid {
    name    : String;
    contact : String;
    attachments: Composition of many Attachments;
}
