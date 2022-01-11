import * as React from 'react';
import './catalogHeader.scss';
import { Select } from 'antd';
import { SortTypes } from '../../../../utils/providers/GlobalContext/globalContext.enums';
import { useTranslation } from 'react-i18next';
const { Option } = Select;

type CatalogHeaderProps = {
  pages: number;
  handleChange: (value: any) => void;
  from: number;
  to: number;
};
const CatalogHeader: React.FC<CatalogHeaderProps> = ({ pages, handleChange, from, to }) => {
  const { t } = useTranslation();

  const options = [
    {
      value: SortTypes.newness,
      label: t('Catalog.sort.newness')
    },
    {
      value: SortTypes.oldest,
      label: t('Catalog.sort.oldest')
    },
    {
      value: SortTypes.rating,
      label: t('Catalog.sort.rating')
    },
    {
      value: SortTypes.price,
      label: t('Catalog.sort.price')
    }
  ];
  return (
    <div className="catalog-header">
      <p>
        {`${t('Catalog.header.showing')} ${from}- ${to > pages ? pages : to} ${t('Catalog.header.of')} ${pages} ${t(
          'Catalog.header.results'
        )}
      `}
      </p>
      <Select bordered={false} defaultValue={options[0].value} style={{ width: 150 }} onChange={handleChange}>
        {options.map(({ value, label }) => (
          <Option key={value} value={value}>
            {label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export { CatalogHeader };
