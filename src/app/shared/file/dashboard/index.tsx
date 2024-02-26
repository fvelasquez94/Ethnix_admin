'use client';

// import StorageReport from '@/app/shared/file/dashboard/storage-report';
// import FileStats from '@/app/shared/file/dashboard/file-stats';
// import StorageSummary from '@/app/shared/file/dashboard/storage-summary';
// import RecentFiles from '@/app/shared/file/dashboard/recent-files';
// import QuickAccess from '@/app/shared/file/dashboard/quick-access';
// import ActivityReport from '@/app/shared/file/dashboard/activity-report';
// import Members from '@/app/shared/file/dashboard/members';
// import FileListTable from '@/app/shared/file/dashboard/file-list/table';
// import UpgradeStorage from '@/app/shared/file/dashboard/upgrade-storage';
// import RecentActivities from '@/app/shared/file/dashboard/recent-activities';
// import { allFilesData } from '@/data/all-files';
import Image from 'next/image';

import WelcomeBanner from '@/components/banners/welcome';
import HandWaveIcon from '@/components/icons/hand-wave';
import welcomeImg from '@public/shop-illustration.png';

//SESSION
import { useSession } from "next-auth/react"

export default function FileDashboard() {
    //session
    const { data:session } = useSession()
    console.log("Session data --->",session)

  return (
    
    // <div className="@container">
    //   <FileStats className="mb-5 2xl:mb-8" />
    //   <div className="mb-6 grid grid-cols-1 gap-6 @4xl:grid-cols-12 2xl:mb-8 2xl:gap-8">
    //     <StorageReport className="@container @4xl:col-span-8 @[96.937rem]:col-span-9" />
    //     <StorageSummary className="@4xl:col-span-4 @[96.937rem]:col-span-3" />
    //   </div>

    //   <div className="grid grid-cols-1 gap-6 @container lg:grid-cols-12 2xl:gap-8 ">
    //     <div className="col-span-full flex flex-col gap-6 @5xl:col-span-8 2xl:gap-8 3xl:col-span-9">
    //       <QuickAccess />
    //       <RecentFiles />
    //       <ActivityReport />
    //       <FileListTable data={allFilesData} />
    //     </div>

    //     <div className="col-span-full flex flex-col gap-6 @5xl:col-span-4 2xl:gap-8 3xl:col-span-3">
    //       <RecentActivities />
    //       <Members />
    //       <UpgradeStorage />
    //     </div>
    //   </div>
    // </div>
    
    <div className="@container">
    <div className="grid grid-cols-1 gap-6 3xl:gap-8 mt-8">
      <WelcomeBanner
        title={
          <>
            Welcome back, <br /> {session?.user.access_token.user.userName}{' '}
            <HandWaveIcon className="inline-flex h-8 w-8" />
          </>
        }
        description={
          'Here’s what is happening on the company today.'
        }
        media={ undefined
          // <div className="absolute -bottom-6 end-4 hidden w-[300px] @2xl:block lg:w-[320px] 2xl:-bottom-7 2xl:w-[330px]">
          //   <div className="relative">
          //     <Image
          //       src={welcomeImg}
          //       alt="Ethnix group image"
          //       className="dark:brightness-95 dark:drop-shadow-md"
          //     />
          //   </div>
          // </div>
        }
        contentClassName="@2xl:max-w-[calc(100%-340px)]"
        className="border border-muted bg-gray-0 pb-8 @4xl:col-span-2 @7xl:col-span-8 lg:pb-9 dark:bg-gray-100/30"
      >

      </WelcomeBanner>     
    </div>
    <div>
      {JSON.stringify(session)}
    </div>
    </div>
  );
}
