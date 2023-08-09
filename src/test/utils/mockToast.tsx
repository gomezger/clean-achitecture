

export const mockToast = (): void => {
    // mock toast
    jest.mock('@core/toast', () => ({
        showToast: jest.fn(),
        TypeToast: jest.mock,
        hideToast: jest.fn(),
        Toast: () => <></>
    }));
}