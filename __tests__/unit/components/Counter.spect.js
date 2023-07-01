import { beforeEach, describe, expect, test } from 'vitest';
import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue';

describe('Counter Component', () => {
    
    // const wrapper = shallowMount(Counter);
    let wrapper;
    beforeEach(()=>{
        wrapper = shallowMount(Counter);
    })
  
    test('Debe ser mayor a 10', ()=>{
        let value = 11;
        
        expect(value).toBeGreaterThan(10);
    })

    test('Debe hacer match con el snapshot', () => {
        const wrapper = shallowMount(Counter);

        expect(wrapper.html()).toMatchSnapshot();
    })

    test('Render tag H2 and text content is "Counter App"', () => {
        const h2 = wrapper.find('h2');
        expect(h2.exists()).toBeTruthy();
        expect(h2.text()).toBe('Counter App');
    })

    test('debe incrementar y decrementar el valor del contador', async () => { 
        
        const button1 = wrapper.find('[data-testid="button-incrementar"]');
        expect(button1.exists()).toBeTruthy();
        await button1.trigger('click');
        const counterContainer = wrapper.find('[data-testid="counter"]');
        expect(counterContainer.exists()).toBeTruthy();
        let value = counterContainer.text();
        expect(value).toBe("2");

        const button2 = wrapper.find('[data-testid="button-decrementar"]');
        expect(button2.exists()).toBeTruthy();
        await button2.trigger('click');
        await button2.trigger('click');
        value = counterContainer.text();
        expect(value).toBe("0");

    })

    test('debe establecer el valor por defecto', ()=>{
        // const { inicio } = wrapper.props();
        // const inicio = wrapper.props('inicio');
        // const inicio = wrapper.props().inicio;
        const inicio = wrapper.props()['inicio'];

        const counterContainer = wrapper.find('[data-testid="counter"]');
        expect(counterContainer.exists()).toBeTruthy();
        const value = counterContainer.text();
        expect(Number(value)).toBe(inicio);
    })

    test('debe establecer el valor enviado por props', ()=>{
        const testValue = 10;
        wrapper = shallowMount(Counter, {
            props: {
                inicio: testValue
            }
        });
        const { inicio } = wrapper.props();
        const counterContainer = wrapper.find('[data-testid="counter"]');
        expect(counterContainer.exists()).toBeTruthy();
        const value = counterContainer.text();
        expect(Number(value)).toBe(inicio);
        expect(Number(value)).toBe(testValue);
    })

})
