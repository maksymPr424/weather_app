'use client';

import CurrentInfo from '@/app/components/currentInfo';
import { ICurrent } from '@/lib/api';
// import { useAppDispatch } from '@/redux/hooks';
import { selectCurrent, selectIsInitialData } from '@/redux/weather/selectors';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Current() {
  //   const dispatch = useAppDispatch();
  const [current, setCurrent] = useState<ICurrent | null>(null);

  const currentData = useSelector(selectCurrent);
  const isInitialData = useSelector(selectIsInitialData);

  useEffect(() => {
    if (isInitialData) {
      setCurrent(null);
      return;
    }
    setCurrent(currentData);
  }, [currentData, isInitialData]);

  return <CurrentInfo current={current} />;
}
