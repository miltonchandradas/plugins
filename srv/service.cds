using {demo} from '../db/schema';

@path: 'service/demo'
service DemoService {
    entity Suppliers as select from demo.Suppliers;
    annotate Suppliers with @odata.draft.enabled;
}
