'use client';

import Link from 'next/link';
import { type INewCustomer } from '@/types/models/newcustomers';
import { routes } from '@/config/routes';
import { Text, Badge, Tooltip, Checkbox, ActionIcon } from 'rizzui';
import { HeaderCell } from '@/components/ui/table';
import EyeIcon from '@/components/icons/eye';
import PencilIcon from '@/components/icons/pencil';
import AvatarCard from '@/components/ui/avatar-card';
import DateCell from '@/components/ui/date-cell';
import DeletePopover from '@/app/shared/delete-popover';

function findRoles(array, title) {
  return array.find((element) => {
    return element.name === title;
  })
}

function getStatusBadge(status: number) {

  switch (status) {
    case 1:
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium text-primary-dark">Unassigned</Text>
        </div>
      );
    case 2:
      return (
        <div className="flex items-center">
          <Badge color="danger" renderAsDot />
          <Text className="ms-2 font-medium text-primary-dark">Refused</Text>
        </div>
      );
    case 3:
      return (
        <div className="flex items-center">
          <Badge color="primary" renderAsDot />
          <Text className="ms-2 font-medium text-primary-dark">Commercial</Text>
        </div>
      );
      case 4:
        return (
          <div className="flex items-center">
            <Badge color="primary" renderAsDot />
            <Text className="ms-2 font-medium text-primary-dark">Operations</Text>
          </div>
        );
        case 5:
          return (
            <div className="flex items-center">
              <Badge color="primary" renderAsDot />
              <Text className="ms-2 font-medium text-primary-dark">Finance</Text>
            </div>
          );
          case 6:
            return (
              <div className="flex items-center">
                <Badge color="success" renderAsDot />
                <Text className="ms-2 font-medium text-primary-dark">Completed</Text>
              </div>
            );
            case 7:
              return (
                <div className="flex items-center">
                  <Badge color="success" renderAsDot />
                  <Text className="ms-2 font-medium text-primary-dark">Completed - In SAP</Text>
                </div>
              );
            case 8:
      return (
        <div className="flex items-center">
          <Badge color="danger" renderAsDot />
          <Text className="ms-2 font-medium text-primary-dark">Saved in SAP But Pepperi Error</Text>
        </div>
      );
            
    default:
      return (
        <div className="flex items-center">
          <Badge renderAsDot className="bg-gray-400" />
          <Text className="ms-2 font-medium text-gray-600">Unassigned def</Text>
        </div>
      );
  }
}

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
  user?: any;
};

export const getColumns = ({
  data,
  sortConfig,
  checkedItems,
  onDeleteItem,
  onHeaderCellClick,
  handleSelectAll,
  onChecked,
  user
}: Columns) => [
  // {
  //   title: (
  //     <div className="ps-2">
  //       <Checkbox
  //         title={'Select All'}
  //         onChange={handleSelectAll}
  //         checked={checkedItems.length === data.length}
  //         className="cursor-pointer"
  //       />
  //     </div>
  //   ),
  //   dataIndex: 'checked',
  //   key: 'checked',
  //   width: 30,
  //   render: (_: any, row: any) => (
  //     <div className="inline-flex ps-2">
  //       <Checkbox
  //         className="cursor-pointer"
  //         checked={checkedItems.includes(row.id)}
  //         {...(onChecked && { onChange: () => onChecked(row.id) })}
  //       />
  //     </div>
  //   ),
  // },
  {
    title: <HeaderCell title="Product" />,
    dataIndex: 'customer',
    key: 'customer',
    width: 250,
    hidden: 'customer',

    render: (_: string, row: INewCustomer) => (
      <>
          <Text className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">
      {row.customerName}
    </Text>
   
      <Text className="text-[13px] text-gray-500">{`#-${row.id}`}</Text>
    
      </>
  
    ),
  },
  {
    title: <HeaderCell title="Status" />,
    dataIndex: 'status',
    key: 'status',
    width: 120,
    render: (value: number) => getStatusBadge(value),
  },
  {
    title: <HeaderCell title="SAP ItemCode" />,
    dataIndex: 'sapCardCode',
    key: 'sapCardCode',
    width: 250,
    render: (city: string) => city,
  },
  {
    title: <HeaderCell title="Brand" />,
    dataIndex: 'city',
    key: 'city',
    width: 250,
    render: (city: string) => city,
  },

  {
    title: (
      <HeaderCell
        title="Federal TAX ID"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'federalTax'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('federalTax'),
    dataIndex: 'federalTax',
    key: 'federalTax',
    width: 200,
    render: (federalTax: string) => (
      <Text className="font-medium text-gray-700 dark:text-gray-600">
        {federalTax} 
      </Text>
    ),
  },
  {
    title: (
      <HeaderCell
        title="RESALES TAX CERT NUM"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'resalesTaxCertificate'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('resalesTaxCertificate'),
    dataIndex: 'resalesTaxCertificate',
    key: 'resalesTaxCertificate',
    width: 200,
    render: (federalTax: string) => (
      <Text className="font-medium text-gray-700 dark:text-gray-600">
        {federalTax}
      </Text>
    ),
  },

  {
    title: <></>,
    dataIndex: 'action',
    key: 'action',
    width: 140,
    render: (_: string, row: any) => (
      
      <div className="flex items-center justify-end gap-3 pe-3">

          {(user?.roles.length>0) ? (
                    <Tooltip
                    size="sm"
                    content={'Edit Customer'}
                    placement="top"
                    color="invert"
                  >
{(row.status==1 && (findRoles(user?.roles,"Frontdesk")?.name=="Frontdesk" || user?.userName=="Administrator"))? (
  <Link href={routes.newcustomers.edit(row.id)}>
  <ActionIcon
    as="span"
    size="sm"
    variant="outline"
    className="hover:!border-gray-900 hover:text-gray-700"
  >
    <PencilIcon className="h-4 w-4" />
  </ActionIcon>
</Link>
) : (row.status==3 &&  (findRoles(user?.roles,"Commercial")?.name =="Commercial"|| user?.userName=="Administrator"))? (
<Link href={routes.newcustomers.edit_commercial(row.id)}>
<ActionIcon
as="span"
size="sm"
variant="outline"
className="hover:!border-gray-900 hover:text-gray-700"
>
<PencilIcon className="h-4 w-4" />
</ActionIcon>
</Link>
) : (row.status==4 && (findRoles(user?.roles,"Operations")?.name=="Operations" || user?.userName=="Administrator")) ? (
<Link href={routes.newcustomers.edit_operations(row.id)}>
<ActionIcon
as="span"
size="sm"
variant="outline"
className="hover:!border-gray-900 hover:text-gray-700"
>
<PencilIcon className="h-4 w-4" />
</ActionIcon>
</Link>
) : (row.status==5 && (findRoles(user?.roles,"Financials")?.name=="Financials" || user?.userName=="Administrator")) ? (
<Link href={routes.newcustomers.edit_finantials(row.id)}>
<ActionIcon
as="span"
size="sm"
variant="outline"
className="hover:!border-gray-900 hover:text-gray-700"
>
<PencilIcon className="h-4 w-4" />
</ActionIcon>
</Link>
) 

: <></>}



</Tooltip>
          ) : null }
          
        <Tooltip
          size="sm"
          content={'View Customer'}
          placement="top"
          color="invert"
        >
          <Link href={routes.newcustomers.details(row.id)}>
            <ActionIcon
              as="span"
              size="sm"
              variant="outline"
              className="hover:!border-gray-900 hover:text-gray-700"
            >
              <EyeIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        {(row.status!=2 && row.status!=6 && row.status!=7 && row.status!=8) ? (
           <DeletePopover
           title={`Delete customer`}
           description={`Are you sure you want to delete this #${row.id} customer?`}
           onDelete={() => onDeleteItem(row.id)}
         />
        ):null}
       
       
      </div>
    ),
  },
];
