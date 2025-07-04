import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './CompanyDetail.module.css';
import commonTableStyles from '@/styles/table.module.css';
import inputGroupStyles from '@/styles/inputGroup.module.css';
import formStyles from '@/styles/form.module.css';
import Button from '@/components/atoms/Button';
import LabelWithRequired from '@/components/atoms/LabelWithRequired';
import CustomDatepicker from '@/components/molecules/CustomDatepicker';
import type { CompanyType } from '@/types/companyType';
import RadioGroup from '@/components/molecules/RadioGroup';
import AddressSearchModal from '@/components/organisms/AddressSearchModal';
import {
  formatBrn,
  formatResidentNumber,
  formatPhoneNumber,
  formatCurrency,
} from '@/utils/formatters';
import { getCompanyDefaultValues } from '@/utils/formDefaults';

interface CompanyDetailProps {
  caption: string;
  selectedClient: CompanyType | null;
  isEditMode: boolean;
}

function CompanyDetail({
  caption,
  selectedClient,
  isEditMode,
}: CompanyDetailProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { setValue, control, register, watch } = useForm({
    defaultValues: getCompanyDefaultValues(selectedClient),
  });

  return (
    <table
      className={`${commonTableStyles.commonTable} ${styles.companyTable}`}>
      <caption>{caption}</caption>
      <colgroup>
        <col style={{ width: '175px' }} />
        <col style={{ width: 'auto' }} />
        <col style={{ width: '175px' }} />
        <col style={{ width: 'auto' }} />
      </colgroup>
      <tbody>
        <tr>
          <th>
            <LabelWithRequired label="사업자등록번호" required />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <div className={inputGroupStyles.inputWithButton}>
                <Controller
                  name="brn"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={formStyles.inputFull}
                      onChange={(e) =>
                        field.onChange(formatBrn(e.target.value))
                      }
                      value={field.value}
                    />
                  )}
                />
                <Button text="사업자등록상태 조회" variant="white" />
              </div>
            ) : (
              selectedClient?.brn
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="주민 등록 번호" required />
          </th>
          <td>
            {isEditMode ? (
              <Controller
                name="registration_number"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className={formStyles.inputFull}
                    onChange={(e) =>
                      field.onChange(formatResidentNumber(e.target.value))
                    }
                    value={field.value}
                  />
                )}
              />
            ) : (
              selectedClient?.resident_registration_number
            )}
          </td>
          <th>
            <LabelWithRequired label="주민기재분" required />
          </th>
          <td>
            {isEditMode ? (
              <Controller
                name="resident_type"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    name="resident_type"
                    value={field.value}
                    onChange={field.onChange}
                    options={[
                      { label: '부', value: '부' },
                      { label: '여', value: '여' },
                    ]}
                  />
                )}
              />
            ) : (
              selectedClient?.resident_type
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="대표자 성명" required />
          </th>
          <td>
            {isEditMode ? (
              <input
                type="text"
                {...register('ceo_name')}
                className={formStyles.inputFull}
              />
            ) : (
              selectedClient?.ceo_name
            )}
          </td>
          <th>
            <LabelWithRequired label="종 사업장 번호" required />
          </th>
          <td>
            {isEditMode ? (
              <input
                type="text"
                {...register('sub_business_number')}
                className={formStyles.inputFull}
              />
            ) : (
              selectedClient?.sub_business_number
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="업종" required />
          </th>
          <td>
            {isEditMode ? (
              <input
                type="text"
                {...register('business_type')}
                className={formStyles.inputFull}
              />
            ) : (
              selectedClient?.business_type
            )}
          </td>
          <th>
            <LabelWithRequired label="종목" required />
          </th>
          <td>
            {isEditMode ? (
              <input
                type="text"
                {...register('item')}
                className={formStyles.inputFull}
              />
            ) : (
              selectedClient?.item
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="주소" required />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <div className={inputGroupStyles.inputGroupCol}>
                <div
                  className={`${inputGroupStyles.inputWithButton} ${styles.zipcodeBox}`}>
                  <input type="text" {...register('zipcode')} disabled />
                  <Button
                    text="우편번호 검색"
                    variant="white"
                    onClick={() => setIsModalOpen(true)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    {...register('address')}
                    className={formStyles.inputFull}
                  />
                </div>
                {isModalOpen && (
                  <AddressSearchModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onComplete={(zipcode, address) => {
                      setValue('zipcode', zipcode);
                      setValue('address', address);
                    }}
                  />
                )}
              </div>
            ) : (
              <>
                {`(${selectedClient?.zipcode}) `}
                {selectedClient?.address}
              </>
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="연락처" />
          </th>
          <td>
            {isEditMode ? (
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className={formStyles.inputFull}
                    onChange={(e) =>
                      field.onChange(formatPhoneNumber(e.target.value))
                    }
                    value={field.value}
                  />
                )}
              />
            ) : (
              selectedClient?.phone
            )}
          </td>
          <th>
            <LabelWithRequired label="팩스번호" />
          </th>
          <td>
            {isEditMode ? (
              <Controller
                name="fax"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className={formStyles.inputFull}
                    onChange={(e) =>
                      field.onChange(formatPhoneNumber(e.target.value))
                    }
                    value={field.value || ''}
                  />
                )}
              />
            ) : (
              selectedClient?.fax
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="담당(부서)사원" />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <div className={inputGroupStyles.inputGroupCol}>
                <div className={inputGroupStyles.inputWithTextLeft}>
                  <span>부서명</span>
                  <input type="text" {...register('department')} />
                </div>
                <div className={inputGroupStyles.inputWithTextLeft}>
                  <span>담당자</span>
                  <input type="text" {...register('manager')} />
                </div>
              </div>
            ) : (
              <>
                {selectedClient?.department} / {selectedClient?.manager}
              </>
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="인쇄할거래처명" />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <input
                type="text"
                {...register('printable_company_name')}
                className={formStyles.inputFull}
              />
            ) : (
              selectedClient?.printable_company_name
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="담보설정액" />
          </th>
          <td>
            {isEditMode ? (
              <div className={inputGroupStyles.inputWithTextRight}>
                <Controller
                  name="guarantee_amount"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={formStyles.inputFull}
                      onChange={(e) =>
                        field.onChange(formatCurrency(e.target.value))
                      }
                      value={field.value || ''}
                    />
                  )}
                />
                <span>원</span>
              </div>
            ) : (
              selectedClient?.guarantee_amount
            )}
          </td>
          <th>
            <LabelWithRequired label="여신한도액" />
          </th>
          <td>
            {isEditMode ? (
              <div className={inputGroupStyles.inputWithTextRight}>
                <Controller
                  name="credit_limit"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={formStyles.inputFull}
                      onChange={(e) =>
                        field.onChange(formatCurrency(e.target.value))
                      }
                      value={field.value || ''}
                    />
                  )}
                />
                <span>원</span>
              </div>
            ) : (
              selectedClient?.credit_limit
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="주류코드" />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <div className={inputGroupStyles.inputAlign}>
                <input type="text" {...register('product_code')} />
                <input type="text" {...register('product_name')} />
              </div>
            ) : (
              <>
                {selectedClient?.product_code}호 /{' '}
                {selectedClient?.product_name}
              </>
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="입금 계좌 번호" />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <div className={inputGroupStyles.inputGroupCol}>
                <div className={inputGroupStyles.inputWithTextLeft}>
                  <span>은행</span>
                  <input type="text" {...register('bank')} />
                </div>
                <div className={inputGroupStyles.inputGroupHalf}>
                  <div className={inputGroupStyles.inputWithTextLeft}>
                    <span>예금주</span>
                    <input type="text" {...register('account_holder')} />
                  </div>
                  <div className={inputGroupStyles.inputWithTextLeft}>
                    <span>계좌번호</span>
                    <input type="text" {...register('account_number')} />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <p>{selectedClient?.bank}</p>
                <p>
                  <span>
                    예금주 {selectedClient?.account_holder} / 계좌번호{' '}
                  </span>
                  <span>{selectedClient?.account_number}</span>
                </p>
              </>
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="업체담당자이메일" />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <input
                type="text"
                {...register('email')}
                className={formStyles.inputFull}
              />
            ) : (
              selectedClient?.email
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="거래처 분류명" />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <div className={inputGroupStyles.inputAlign}>
                <input
                  type="text"
                  {...register('category1')}
                  className={formStyles.inputFull}
                />
                <input
                  type="text"
                  {...register('category2')}
                  className={formStyles.inputFull}
                />
              </div>
            ) : (
              <>
                {selectedClient?.category1} / {selectedClient?.category2}
              </>
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="거래시작(종료)일" />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <div className={inputGroupStyles.inputWithTextLeft}>
                <span>시작일</span>
                <Controller
                  name="contract_start"
                  control={control}
                  render={({ field }) => (
                    <CustomDatepicker
                      selected={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                <p style={{ margin: '0 10px' }}>~</p>
                <span>종료일</span>
                <Controller
                  name="contract_end"
                  control={control}
                  render={({ field }) => (
                    <CustomDatepicker
                      selected={field.value}
                      onChange={field.onChange}
                      minDate={watch('contract_start') ?? undefined}
                    />
                  )}
                />
              </div>
            ) : (
              <>
                {selectedClient?.contract_start} ~{' '}
                {selectedClient?.contract_end}
              </>
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="비고" />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <input
                type="text"
                {...register('note')}
                className={formStyles.inputFull}
              />
            ) : (
              selectedClient?.note || ' '
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="사용여부" />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <Controller
                name="is_active"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    name="is_active"
                    value={field.value}
                    onChange={field.onChange}
                    options={[
                      { label: '부', value: '부' },
                      { label: '여', value: '여' },
                    ]}
                  />
                )}
              />
            ) : (
              selectedClient?.is_active
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CompanyDetail;
