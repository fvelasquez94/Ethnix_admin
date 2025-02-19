'use client';

import { useState, useEffect } from 'react';
import { SubmitHandler, Controller } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { Text, Input, Select,RadioGroup,AdvancedRadio, Button, Checkbox, CheckboxGroup } from 'rizzui';
import { PiCheckCircleFill } from 'react-icons/pi';
import cn from '@/utils/class-names';
import {
  FormBlockWrapper,
} from '@/app/shared/invoice/form-utils';
import { toast } from 'react-hot-toast';
// TYPES
import { IModel_NewProducts, IModel_Errorgateway } from "@/types";
// SERVICES
import { HttpService } from "@/services";
import {
  yesnoanswer, weekdaysnumbers, visitfrecuency, properties_extra,ReturnReasons
} from '@/app/shared/newcustomers/select-options';
//ERROR
import GeneralErrorCard from '@/components/cards/general-error-card';
import { parseInt } from 'lodash';
import Link from 'next/link';
import { routes } from '@/config/routes';
import { useRouter } from 'next/navigation';

export default function EditNewCustomersFinantials({
  id,
  record,
}: {
  id: string;
  record?: IModel_NewProducts.IProduct;
}) {
  const [isLoading, setLoading] = useState(false); 
  const negMargin = '-mx-4 md:-mx-5 lg:-mx-6 3xl:-mx-8 4xl:-mx-10';
  //Errors
  const [errormessage, setErrorMessage] = useState<IModel_Errorgateway.IResponse>();
  //Selects
  const [showerror, setShowError] = useState(true);
  const [paymenttermselected, setPaymentTermSelected] = useState("");
  const [propertiesvaluesToSend, setPropertiesValuesToSend] = useState([]);

  const { push } = useRouter();

  useEffect(() => {
    // action on update of movies
   
}, [errormessage]);

const onCancel = () => {

} 

const onSendtoOperations = () => {
  
} 

  const onSubmit: SubmitHandler<IModel_NewProducts.IProductFinance> = async (data) => {
    const http = new HttpService();
    setLoading(true);
    setShowError(true);
    
    const dataupdate ={
      itemId: parseInt(id),
      mainListUnitPrice: record?.mainListPrice,
      diamondFactor: data.diamondFactor,
      goldFactor: data.goldFactor,
      silverFactor: data.silverFactor,
      commission: data.commission,
      minimunProfit: data.minimunProfit,
      returnReasons: "105,111",
      sendToSap: true,
      userId:"Services"
    }

    console.log("Data to send->", dataupdate)


//Enviamos update
const response = await http.service().update<IModel_Errorgateway.IResponseAPI, IModel_NewProducts.IProductFinance>(`/items/items/AppLimena/Finances`,"", dataupdate);
  
console.log(response)

    
    setTimeout(() => {
      setLoading(false);

if(response.succeeded){
        console.log('JSON FINAL data ->', JSON.stringify(dataupdate));
        console.log('RESPONSE ->', JSON.stringify(response));
  toast.success(
    <Text as="b">Product updated successfully and sent to SAP</Text>
  );
  push(routes.newproducts.home);
}else{
  const final : any=response;
  const errorResp=final as IModel_Errorgateway.IError_gateway;
  setErrorMessage(errorResp.response)
  console.log("Complete error log",errorResp)
  toast.error(
    <Text as="b">Error when update product, please check log at bottom page or contact IT Support</Text>
  );
  setShowError(false);
}



    }, 600);
  };


 if(record){

   return (
    <>
    <Form<IModel_NewProducts.IProductFinance>
      //validationSchema={newcustomerFormSchema}
      //resetValues={reset}
      onSubmit={onSubmit}
      useFormProps={{
        defaultValues: {
          ...record,
        },
      }}
      className="flex flex-grow flex-col @container [&_label]:font-medium"
    >
      {({ register, control, watch,getValues, setValue, formState: { errors } }) => (
        <>
          <div className="flex-grow pb-10">
          Product: {record.productName}

            <div className="grid grid-cols-1 gap-8 divide-y divide-dashed divide-gray-200 @2xl:gap-10 @3xl:gap-12">
              <FormBlockWrapper
                title="Financials"
                description=""
                
              >               
            <Input
                  label="Main List Unit Price"
                  
                  readOnly
                  {...register('mainListUnitPrice')}
                  //error={errors.customerName?.message}
                />

<Input
                  label="Minimum profit"
                  type={"number"}
                  {...register('minimunProfit')}
                />
                <Input
                  label="Commission"
            
                  {...register('commission')}
                />

<Input
                  label="Diamon Factor"
                  type={"number"}
                  {...register('diamondFactor')}

                />
                
<Input
                  label="Gold Factor"
                  type={"number"}
                  {...register('goldFactor')}

                />
                
<Input
                  label="Silver Factor"
                  type={"number"}
                  {...register('silverFactor')}

                />

               <CheckboxGroup
            values={propertiesvaluesToSend}
            setValues={setPropertiesValuesToSend}
            className="col-span-full grid gap-4 @lg:grid-cols-3 mt-4"
          >
            
            <h3>Commercial Return Reasons</h3>

         
           
               {ReturnReasons.map((returnreason) => (
              <Checkbox
                  key={returnreason.value}
                  name="prop_returnreasons"
                  label={returnreason.label}
                  value={returnreason.value}
                  className="mb-5"
                  labelClassName="pl-2 text-sm font-medium !text-gray-900"
                  helperClassName="text-gray-500 text-sm mt-3 ms-8"
                />
              ))}
            
 
          </CheckboxGroup>

       





              </FormBlockWrapper>
             



            </div>
          </div>
          <div
      className={cn(
        'sticky bottom-0 left-0 right-0 z-10 -mb-8 flex items-center justify-end gap-4 border-t bg-white px-4 py-4 md:px-5 lg:px-6 3xl:px-8 4xl:px-10 dark:bg-gray-50',
        negMargin
      )}
    >
  <Link  href={routes.newproducts.home} >
          Back to list
      </Link>

  
      <Button    type="submit"
        isLoading={isLoading}  className="w-full @xl:w-auto">
        Send to SAP
      </Button>
    </div>
   </>
      )}
    </Form>
{!showerror ? (
      <GeneralErrorCard key={Math.random()} data={errormessage}/>
) : null}
        </>

  );
 } else{

    return <>Loading information...</>;
  }


  
}
